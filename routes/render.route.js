import { Router } from "express";
import { contact, about, home } from "../controllers/render.controller.js";

const router = Router()

router.get('/', home)
router.get('/about', about)
router.get('/contact', contact)

export default router;