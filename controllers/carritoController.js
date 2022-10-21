import Carrito from "../models/Carrito.js";

const agregar = async(req, res) =>{
    try {
        const carrito = new Carrito(req.body);
        const carritoAlmacenado=await carrito.save();
        res.json({body: carritoAlmacenado, ok:"SI"});
    } catch (error) {
        console.log("error al agregar");
    }
}

const listar = async(req, res) =>{
    console.log("respondiendo desde el metodo listar carrito");
}

const eliminar = async(req, res) =>{
    console.log("respondiendo desde el metodo eliminar carrito");
}

const editar = async(req, res) =>{
    console.log("respondiendo desde el metodo editar carrito");
}

const listarUno = async(req, res) =>{
    console.log("respondiendo desde el metodo listar uno carrito");
}

export{
    agregar,
    listar,
    eliminar,
    editar,
    listarUno
}