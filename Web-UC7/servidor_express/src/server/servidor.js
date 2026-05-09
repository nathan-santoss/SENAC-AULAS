import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

//importando as ROTAS JAVASCRIPT
import router_index from '../routers/index.js'
import router_cursos from '../routers/router_cursos.js'
import router_alunos from '../routers/router_alunos.js'

//instanciando o servidor express, rota e porta
const app = express()
const port = 3000
const host = 'localhost'

// procurando a pasta 'public' usando 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const public_Path = path.resolve(__dirname, '..', 'public')

// deixando a pasta 'public' acessível (pública)
app.use(express.static(public_Path))

//permite que todos os dados que passem pelas rotas (vindo pelas URLs sejam convertidas em JSON)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ativação das rotas
app.use(router_index)
app.use(router_cursos)
app.use(router_alunos)

// ligando o servidor
app.listen(port, host, () => {
    console.log('servidor ligado')
})