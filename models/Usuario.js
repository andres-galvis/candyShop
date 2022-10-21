import mongoose from "mongoose";

const usuarioSchema=mongoose.Schema({

    nombreUsuario:{
        type: String,
        require:true,
        trim: true
    },

    direccionUsuario:{
        type:String,
        require:true,
        trim:true
    },

    telefonoUsuario:{
        type:Number,
        require:true,
        trim:true
    },

    correoUsuario:{
        type:String,
        require:true,
        trim:true
    }
},{
    timestamps:true
})

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;