import mongoose from "mongoose";

const carritoSchema=mongoose.Schema({
    idUsuario:{
        type: mongoose.Schema.Types.ObjectId, //llave foranea
        ref: "Usuario",//tabla referencia de la llave foranea
        require: true,
        trim: true
    },

    idProducto:{
        type: mongoose.Schema.Types.ObjectId, //llave foranea
        ref: "Producto",//tabla referencia de la llave foranea
        require: true,
        trim: true
    },

    fechaCompra:{
        type:Date,
        require:true,
        trim: true
    },

    horaCompra:{
        type:Date,
        require: true,
        trim: true
    },

    totalCompra:{
        type: Number,
        require: true,
        trim: true
    },

    cantidadCompra:{
        type:Number,
        require:true,
        trim:true
    },

    precioProducto:{
        type:Number,
        require: true,
        trim: true
    }


},{
    timestamps: true
})

const Carrito = mongoose.model("Carrito", carritoSchema);
export default Carrito;