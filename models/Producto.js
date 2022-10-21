import mongoose from "mongoose";

const productoSchema=mongoose.Schema({
    idCategoria:{
        type: mongoose.Schema.Types.ObjectId, //llave foranea
        ref: "Categoria",//tabla referencia de la llave foranea
        require: true,
        trim: true
    },

    idProveedor:{
        type: mongoose.Schema.Types.ObjectId, //llave foranea
        ref: "Proveedor",//tabla referencia de la llave foranea
        require: true,
        trim: true
    },

    nombreProducto:{
        type:String,
        require: true,
        trim: true
    },

    precioProducto:{
        type:Number,
        require:true,
        trim: true
    },

    cantidadProducto:{
        type:Number,
        require:true,
        trim:true
    },

    descripcionProducto: {
        type:String,
        require: true,
        trim: true
    }


},{
    timestamps:true
});

const Producto = mongoose.model("Producto", productoSchema);
export default Producto;