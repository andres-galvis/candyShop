import Producto from "../models/Producto.js";

const agregar = async(req, res) =>{
    try {
        const producto=new Producto(req.body);
        const productoAlmacenado = await producto.save()
        res.json({body: productoAlmacenado, ok:"SI"});
    } catch (error) {
        console.log("error");
    }
}

const listar = async(req, res) =>{
    console.log("respondiendo desde el metodo listar productos");
}

const eliminar = async(req, res) =>{
    console.log("respondiendo desde el metodo eliminar productos");
}

const editar = async(req, res) =>{
    console.log("respondiendo desde el metodo editar productos");
}

const listarUno = async(req, res) =>{
    console.log("respondiendo desde el metodo listar uno productos");
}

export{
    agregar,
    listar,
    eliminar,
    editar,
    listarUno
}