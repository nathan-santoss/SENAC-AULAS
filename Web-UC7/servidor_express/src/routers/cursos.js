import express from 'express'

const router_cursos = express()

router_cursos.get('/', (req, res) => {
    console.log('entrou na pagina')
    res.send('<h1> pagina aberta <h1>')
})

export default router_cursos