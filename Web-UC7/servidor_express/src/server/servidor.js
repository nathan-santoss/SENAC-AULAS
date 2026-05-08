import express from 'express'
import router_cursos from '../routers/cursos.js'

const app = express()
const port = 3000
const host = 'localhost'

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router_cursos)

app.listen(port, host, () => {
    console.log('servidor ligado');
})