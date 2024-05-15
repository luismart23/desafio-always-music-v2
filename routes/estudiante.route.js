import { Router } from "express";
import { createEstudiante, getAllEstudiantes, getEstudiante, removeEstudiante, updateEstudiante } from "../controllers/estudiante.controller.js";

const router = Router()

// URL /Estudiantes

router.get('/', getAllEstudiantes)
router.get('/:id', getEstudiante)
router.post('/', createEstudiante)
router.delete('/:id', removeEstudiante)
router.put('/:id', updateEstudiante)

export default router