import express from "express";
import usuarios from '../controlador/usuarios.js'

const router = express.Router()

router.post("/register",usuarios.registro)
router.post("/login", usuarios.login)
router.get("/usuarios",usuarios.obtenerUsuarios)








export {
    router
}