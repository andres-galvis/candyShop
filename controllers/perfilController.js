import Perfil from "../models/Perfil.js";

const agregar = async(req, res) =>{
    //evitar roles duplicados
    const{nombreRol}=req.body;
    const existeRol= await Perfil.findOne({nombreRol});

    if (existeRol) {
        const error=new Error("Rol ya está registrado en la BD");
        return res.status(400).json({msg: error.message, ok: "NO"});
    }


    try {
        const perfil = new Perfil(req.body);
        const perfilAlmacenado= await perfil.save();
        res.json({ body: perfilAlmacenado, ok: "SI"});
    } catch (error) {
        console.log("error");
    }
}

const listar = async(req, res) =>{
    console.log("respondiendo desde el metodo listar perfiles");
}

const eliminar = async(req, res) =>{
    console.log("respondiendo desde el metodo eliminar perfiles");
}

const editar = async(req, res) =>{
    console.log("respondiendo desde el metodo editar perfiles");
}

const listarUno = async(req, res) =>{
    console.log("respondiendo desde el metodo listar uno perfiles");
}

export{
    agregar,
    listar,
    eliminar,
    editar,
    listarUno,
}