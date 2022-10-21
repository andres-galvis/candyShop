import mongoose from "mongoose";

const categoriaSchema=mongoose.Schema({

    nombreCategoria: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
},{
    timestamps: true
})

const Categoria=mongoose.model("Categoria", categoriaSchema);
export default Categoria;