import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioLogSchema = mongoose.Schema({
    idRol: {
        type: mongoose.Schema.Types.ObjectId, //llave foranea
        ref: "Perfil",//tabla referencia de la llave foranea
        require: true,
        trim: true
    },

    nombreUsuLog:{
        type:String,
        require: true,
        trim: true
    },

    celularUsuLog:{
        type:Number,
        require: true,
        trim: true
    },

    correoUsuLog:{
        type:String,
        require: true,
        trim: true,
        unique: true
    },

    direccionUsuLog: {
        type:String,
        require: true,
        trim: true
    },

    usuarioAcceso: {
        type:String,
        require: true,
        trim: true,
        unique: true //no hay dos con el mismo nombre de usuario
    },

    claveAcceso: {
        type: String,
        require: true,
        trim: true,
    }

},{
    timestamps: true
});

usuarioLogSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.claveAcceso= await bcrypt.hash(this.claveAcceso, salt);
})

usuarioLogSchema.methods.comprobarClave=async function (claveFormulario){
    return await bcrypt.compare(claveFormulario, this.claveAcceso);
}

const UsuarioLog = mongoose.model("UsuarioLog", usuarioLogSchema);
export default UsuarioLog;