import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { engine } from 'express-handlebars';

import estudiantesRoutes from './routes/estudiante.route.js'
import renderRoutes from './routes/render.route.js'

const app = express()

// habilitar cors público
app.use(cors())

// habilitar el req.body tanto de json como formularios html
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// habilitar los archivos estáticos (public)
app.use(express.static('public'))

// Handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

// Rutas renderizadas con Handlebars
app.use('/', renderRoutes)

// Rutas /estudiantes
app.use('/api/v1/estudiantes', estudiantesRoutes)

// Ruta 404
app.use('*', (req, res) => {
    return res.status(404).json({ ok: false, msg: 'página no encontrada' })
})

// levantar el servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})