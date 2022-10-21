import Categoria from "../models/Categoria.js";

const agregar = async(req, res) =>{
    try {
        const categoria=new Categoria(req.body);
        const categoriaAlmacenada= await categoria.save();
        res.json({body: categoriaAlmacenada, ok:"SI"});
    } catch (error) {
        console.log("error");
    }
}

const listar = async(req, res) =>{
    console.log("respondiendo desde el metodo listar categorías");
}

const eliminar = async(req, res) =>{
    console.log("respondiendo desde el metodo eliminar categorías");
}

const editar = async(req, res) =>{
    console.log("respondiendo desde el metodo editar categorías");
}

const listarUno = async(req, res) =>{
    console.log("respondiendo desde el metodo listar uno categorías");
}

export{
    agregar,
    listar,
    eliminar,
    editar,
    listarUno
}