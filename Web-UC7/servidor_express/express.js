import express from 'express'
import fs from 'fs'

const app = express()
const porta = 3001
const host = 'localhost'
const pagina_principal = fs.readFileSync('index.html', 'utf-8')
const page_cadastro = fs.readFileSync('cadastro/cadastro.html', 'utf-8')

// Com essas duas linhas abaixo, todos os dados recebidos pela URL são transformados em JSON. 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// A leitura ocorre de maneira sequencial.

app.get('/', (req,res) => {
    res.send(pagina_principal)
})
app.get('/cadastro', (req, res) => {
    res.send(page_cadastro)
})

app.post('/curso', (req, res) => {

})

app.listen(porta, host, () => {
    console.log(`aplicação iniciada! porta: ${porta} em ${host}`);
})