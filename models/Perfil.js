import mongoose from "mongoose";

const perfilSchema=mongoose.Schema({
    nombreRol: {
        type: String,
        require: true, //not null
        trim: true //trim usado para quitar espacios al inicio y final    
    },

    estadoRol: {
        type: Number,
        require: true,
        trim: true
    }
},{
    timestamps: true
});

const Perfil = mongoose.model("Perfil", perfilSchema);
export default Perfil;