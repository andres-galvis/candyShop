import express from "express";
const router = express.Router();
import {agregar, listar, eliminar, editar, listarUno, autenticar} from "../controllers/logController.js";


router.get("/",listar);
router.get("/:id", listarUno);
router.post("/", agregar);
router.put("/", editar);
router.delete("/", eliminar);
router.post("/login", autenticar);


export default router;