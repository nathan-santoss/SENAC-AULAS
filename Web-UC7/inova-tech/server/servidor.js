import http from 'http'
import {text} from 'stream/consumers'
import fs from 'fs'
const PORT = 3000
const host = 'localhost'
const pagina_inicial = fs.readFileSync('../index.html', 'utf-8')
const pagina_secretaria = fs.readFileSync('../secretaria.html', 'utf-8')
const pagina_cadastro = fs.readFileSync('../cadastro/cadastro.html', 'utf-8')


const server = http.createServer((req, res) => {
    const {url, method} = req
    if((url === '/' && method === 'GET') || (url === '/index' && method === 'GET')){
        res.writeHead(200, {"content-type": "text/html, charset=utf-8"})
        res.end(pagina_inicial)

    }else if(url === '/secretaria' && method === 'GET'){
        res.writeHead(200, {"content-type": "text/html, charset=utf-8"})
        res.end(pagina_secretaria)

    }else if(url === '/cadastro' && method === 'GET'){
        res.writeHead(200, {"content-type": "text/html, charset=utf-8"})
        res.end(pagina_cadastro)
    }
})


// iniciador do servidor
server.listen(PORT, host, () => {
    console.log('servidor online');
})