import Proveedor from "../models/Proveedor.js";

const agregar = async(req, res) =>{
    try {
        const proveedor = new Proveedor(req.body);
        const proveedorAlmacenado = await proveedor.save()
        res.json({body: proveedorAlmacenado, ok:"SI"});
    } catch (error) {
        console.log("error")
    }
}

const listar = async(req, res) =>{
    console.log("respondiendo desde el metodo listar proveedores");
}

const eliminar = async(req, res) =>{
    console.log("respondiendo desde el metodo eliminar proveedores");
}

const editar = async(req, res) =>{
    console.log("respondiendo desde el metodo editar proveedores");
}

const listarUno = async(req, res) =>{
    console.log("respondiendo desde el metodo listar uno proveedores");
}

export{
    agregar,
    listar,
    eliminar,
    editar,
    listarUno
}