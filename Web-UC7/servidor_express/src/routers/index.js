import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const router_index = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const pagina = path.resolve(__dirname, '..', 'public', 'html', 'index.html')

router_index.get('/', (req, res) => {
    res.sendFile(pagina)
})
export default router_index