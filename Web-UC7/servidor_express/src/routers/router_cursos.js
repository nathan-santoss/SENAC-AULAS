import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const router_cursos = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const pagina = path.resolve(__dirname, '..', 'public', 'html', 'cursos.html')

router_cursos.get('/cursos', (req, res) =>{
    res.sendFile(pagina)
})
export default router_cursos