import Login from "../models/UsuarioLog.js";

const agregar = async(req, res) =>{
    //evitar usuarios duplicados por el usuarioAcceso
    const {usuarioAcceso}=req.body;
    const existeUsuario = await Login.findOne({usuarioAcceso});

    if (existeUsuario) {
        const error =  new Error("usuario ya está registrado en la BD");
        return res.status(400).json({msg: error.message, ok:"NO"});
    }


    try {
        const login = new Login(req.body);
        const loginAlmacenado=await login.save();
        res.json({body: loginAlmacenado, ok:"SI"});
    } catch (error) {
        console.log("error al agregar");
    }
}

const listar = async(req, res) =>{
    console.log("respondiendo desde el metodo listar");
}

const eliminar = async(req, res) =>{
    console.log("respondiendo desde el metodo eliminar");
}

const editar = async(req, res) =>{
    console.log("respondiendo desde el metodo editar");
}

const listarUno = async(req, res) =>{
    console.log("respondiendo desde el metodo listar uno");
}

const autenticar = async(req, res) =>{

    const{usuarioAcceso, claveAcceso}=req.body

    const login = await Login.findOne({usuarioAcceso});
    if (!login) {
        const error=new Error("el usuario no existe")
        return res.status(404).json({msg: error.message})
    }

    //comprobar contraseña

    if (await login.comprobarClave(claveAcceso)) {
        res.json({
            _id: login._id,
            nombreUsuario: login.nombreUsuario,
            usuarioAcceso: login.usuarioAcceso
        });
    }else{
        const error= new Error("la clave es incorrecta.");
        res.json({msg: error.message});
    }
}




export{
    agregar,
    listar,
    eliminar,
    editar,
    listarUno,
    autenticar
}