import Usuario from "../models/Usuario.js";

const agregar = async(req, res) =>{
    try {
        const usuario=new Usuario(req.body);
        const usuarioAlmacenado=await usuario.save();
        res.json({body: usuarioAlmacenado, ok:"SI"});
    } catch (error) {
        console.log("error");
    }
}

const listar = async(req, res) =>{
    console.log("respondiendo desde el metodo listar usuarios");
}

const eliminar = async(req, res) =>{
    console.log("respondiendo desde el metodo eliminar usuarios");
}

const editar = async(req, res) =>{
    console.log("respondiendo desde el metodo editar usuarios");
}

const listarUno = async(req, res) =>{
    console.log("respondiendo desde el metodo listar uno usuarios");
}

export{
    agregar,
    listar,
    eliminar,
    editar,
    listarUno,    
}