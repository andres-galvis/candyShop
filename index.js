import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './configCon/db.js';
//archivos de las rutas
import logRouter from './routers/logRouter.js';
import perfilRouter from './routers/perfilRouter.js';
import categoriasRouter from './routers/categoriasRouter.js';
import productosRouter from './routers/productosRouter.js'
import proveedoresRouter from './routers/proveedoresRouter.js'
import usuariosRouter from './routers/usuariosRouter.js';
import carritoRouter from './routers/carritoRouter.js';



const app = express();
app.use(express.json());//leer datos en formato json

//variables de ambiente
dotenv.config();

//conectar a la BD mongodb
conectarDB();

//routing-respuesta del servidor
app.use("/api/login", logRouter);
app.use("/api/perfiles", perfilRouter);
app.use("/api/categorias", categoriasRouter);
app.use("/api/productos", productosRouter);
app.use("/api/proveedores", proveedoresRouter);
app.use("/api/usuarios", usuariosRouter);
app.use("/api/carrito", carritoRouter);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>{
    console.log(`servidor ejecutandose en el puerto ${PORT}`);
})

