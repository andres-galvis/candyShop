import mongoose from "mongoose";

const proveedorSchema=mongoose.Schema({
    nombreProveedor:{
        type:String,
        require:true,
        trim: true
    },

    direccionProveedor:{
        type: String,
        require: true,
        trim: true
    },
    
    telefonoProveedor:{
        type: Number,
        require: true,
        trim: true
    },

    correoProveedor:{
        type:String,
        require:true,
        trim: true
    }
},{
    timestamps:true
});

const Proveedor = mongoose.model("Proveedor", proveedorSchema);
export default Proveedor;