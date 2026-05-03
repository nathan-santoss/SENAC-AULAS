import http from "http";
import fs from "fs";
import { formatar_dados } from "./utilitários/format_formulario.js";
import path from 'path';

let listaAlunos = [];

const port = 3001;
const host = 'localhost';

const server = http.createServer((req, res) => {

    // Criamos o servidor aqui. Imagina que é o nosso restaurante!
    // 'req' (request) é o que o cliente pediu. 'res' (response) é a bandeja que vamos entregar pra ele.
    if (req.method === 'GET') { // Primeiro, a gente pergunta: "O cliente quer apenas LER algo?" O método GET é só para buscar páginas.
        
        // Usamos o 'try' (tentar). É o nosso cinto de segurança: "Vamos tentar fazer isso, se algo der erro, a gente resolve lá embaixo no catch."
        try {
            
            // Criamos a variável 'caminho'. Ela vai ser o nosso mapa para guardar o endereço de onde o arquivo está salvo no computador.
            let caminho;

            // O cliente acessou o site principal sem digitar nada mais? (tipo www.site.com/)
            if (req.url === '/') {
                // Se sim, o nosso mapa aponta direto para a página inicial do projeto.
                caminho = './index/index.html';

            // Mas, e se o cliente acessou exatamente a rota "/Cadastro"?
            } else if (req.url === '/Cadastro') {
                // Aí a gente ajusta o mapa para direcionar ele para a página de matrícula.
                caminho = './secretaria/cadastro/cadastro.html';

            // Se ele acessou "/alunos/json", ele não quer uma página visual. Ele quer os dados em formato JSON (ótimo para outros sistemas lerem).
            } else if (req.url === '/alunos/json') {
                // A gente coloca na bandeja: "Pedido Ok (200)! E o formato é JSON."
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                // Pegamos a 'listaAlunos', transformamos em texto e finalizamos o atendimento dele aqui mesmo (return res.end).
                return res.end(JSON.stringify(listaAlunos));

            // Agora, se ele acessou "/alunos/html", ele quer ver essa mesma lista de alunos de um jeito bonito, numa tabela na tela.
            } else if (req.url === '/alunos/html') {
                
                // Começamos uma variável de texto vazia. Ela vai servir para a gente ir "colando" as linhas da nossa tabela.
                let linhasTabela = '';

                // Pegamos a 'listaAlunos' e passamos por cada um deles (forEach = para cada).
                listaAlunos.forEach(aluno => {
                    // Para cada aluno que achamos, a gente monta uma linha (<tr>) preenchendo as colunas (<td>) com os dados dele.
                    // O "|| ''" é só uma segurança: se não tiver um dado ali, deixa vazio pra não dar erro.
                    linhasTabela += `
                        <tr>
                            <td>${aluno.matricula || ''}</td>
                            <td>${aluno.nome || ''}</td>
                            <td>${aluno.telefone || ''}</td>
                            <td>${aluno.email || ''}</td>
                            <td>${aluno.curso || ''}</td>
                        </tr>
                    `;
                });

                // Aqui a gente cria a página HTML inteirinha do zero, direto na memória do nosso servidor!
                const html = `
                    <!DOCTYPE html>
                    <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8">
                        <title>Alunos Cadastrados - Inova Tech</title>
                        <style>
                            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa; color: #333333; margin: 40px; }
                            h1 { color: #004a8d; text-align: center; margin-bottom: 30px; }
                            table { width: 100%; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); border-radius: 8px; overflow: hidden; }
                            th { background-color: #004a8d; color: #ffffff; padding: 15px; text-align: left; }
                            td { padding: 15px; border-bottom: 1px solid #e9ecef; }
                            tr:nth-child(even) { background-color: #f8f9fa; }
                            tr:hover { background-color: #f1f5f9; }
                        </style>
                    </head>
                    <body>
                        <h1>Alunos Cadastrados</h1>
                        <table>
                            <thead>
                                <tr><th>Matrícula</th><th>Nome</th><th>Telefone</th><th>E-mail</th><th>Curso</th></tr>
                            </thead>
                            <tbody>
                                ${linhasTabela}
                            </tbody>
                        </table>
                    </body>
                    </html>
                `;
                // Damos o ok pro navegador (status 200) e dizemos: "Estou te mandando uma página HTML inteira".
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                // Entregamos o 'html' prontinho e finalizamos o atendimento desse cliente.
                return res.end(html); 

            // E se o cliente não pediu a raiz, nem Cadastro, nem tabela? É porque ele está pedindo um arquivo solto (tipo o CSS, um script ou uma foto).
            } else {
                // Pegamos o que ele digitou (ex: "/curso/style.css") e botamos um ponto na frente pra virar um caminho de verdade ("./curso/style.css").
                caminho = `.${req.url}`

                // Se a URL não tiver um ponto "." (ou seja, ele não avisou se era .html ou .css), a gente tenta adivinhar.
                if (!req.url.includes('.')) {
                    // Colocamos o ".html" no final de forma automática pra ajudar.
                    caminho += '.html';
                }
            }

            // O 'path' é uma ferramenta do NodeJS que olha pro nosso 'caminho' e arranca fora só a extensão dele (ex: ".css", ".jpg").
            const extensao = path.extname(caminho);
            
            // Esse aqui é o nosso dicionário de traduções. Ele diz ao navegador qual é o formato correto de cada arquivo.
            const mimeTypes = {
                '.html': 'text/html; charset=utf-8',
                '.css': 'text/css',
                '.js': 'application/javascript',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.json': 'application/json; charset=utf-8'
            };

            // A gente procura a extensão lá no dicionário. Se não tiver no dicionário, a gente manda como um formato genérico ('application/octet-stream').
            const tipoConteudo = mimeTypes[extensao] || 'application/octet-stream';

            // Chegou a hora H! O "fs" (sistema de arquivos) vai lá no HD do seu computador, procura o arquivo pelo caminho e LÊ todo o conteúdo.
            const conteudoArquivo = fs.readFileSync(caminho);
            
            // Falamos pro navegador: "Achamos o arquivo, deu tudo certo (200), e o tipo dele é esse aqui (tipoConteudo)".
            res.writeHead(200, { 'Content-Type': tipoConteudo });
            
            // Colocamos o conteúdo do arquivo que o 'fs' leu na bandeja e entregamos. Serviço feito!
            res.end(conteudoArquivo); 

        // Lembra do nosso 'try' (o cinto de segurança)? Se der QUALQUER BO de arquivo não encontrado ali em cima, o código pula direto pra cá.
        } catch (erro) {
            // A gente anota no nosso terminal o que deu errado pra investigar depois.
            console.error(`Arquivo não encontrado: ${req.url}`);
            
            // Avisamos o navegador que o arquivo que ele pediu não existe (O famoso Erro 404).
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
            
            // Mandamos uma mensagem simples de erro pra tela não ficar num vazio total.
            res.end('<h1>Página não localizada!</h1>');
        }

    // Bom, e se o método não for GET? Se o usuário estiver ENVIANDO um formulário (POST) e o endereço for '/aluno'...
    } else if (req.url === '/aluno' && req.method === 'POST') {

        // Vamos criar uma variável vazia chamada 'corpo'. Ela vai ser um balde pra segurar as informações que estão chegando pela internet.
        let corpo = ''; 

        // A internet manda os dados pesados em "pedaços" menores.
        // Toda vez que um pedaço ('data') chegar, a gente gruda ele na nossa variável 'corpo'.
        req.on('data', (parte) => {
            corpo += parte.toString(); // Pega a parte, vira texto e soma no balde.
        });

        // O evento 'end' é o alarme tocando: "Opa, chegou o último pedaço do formulário! Recebemos tudo."
        req.on('end', () => {
            
            // O texto que chega do formulário vem todo estranho (ex: nome=Nathan&telefone=9999).
            // A gente chama a nossa funçãozinha "formatar_dados" pra transformar essa bagunça num objeto JavaScript bonitinho.
            const aluno = formatar_dados(corpo);

            // Pegamos a nossa lista de alunos oficial e guardamos o novo aluno dentro dela usando o '.push()'.
            listaAlunos.push(aluno);
            
            // A gente avisa aqui no terminal de fundo preto que um novo aluno foi cadastrado com sucesso!
            console.log('Novo aluno cadastrado:', aluno); 

            // Não vamos deixar o usuário no vácuo, né? Vamos mostrar uma telinha de Sucesso!
            const paginaSucesso = `
                <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <title>Sucesso - Inova Tech</title>
                    <style>
                        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                        .caixa-sucesso { background-color: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0, 74, 141, 0.08); text-align: center; max-width: 500px; }
                        h1 { color: #004a8d; margin-bottom: 15px; }
                        p { color: #555555; margin-bottom: 25px; font-size: 1.1em; }
                        .botao-acao { background-color: #ff9900; color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 8px; font-weight: bold; transition: background-color 0.3s ease; display: inline-block; }
                        .botao-acao:hover { background-color: #004a8d; }
                    </style>
                </head>
                <body>
                    <div class="caixa-sucesso">
                        <h1>Cadastro Realizado com Sucesso!</h1>
                        <p>O aluno <strong>${aluno.nome}</strong> foi adicionado à lista.</p> <!-- A gente injeta o nome do aluno que acabamos de formatar! -->
                        <a href="/Cadastro" class="botao-acao">Cadastrar Novo Aluno</a>
                    </div>
                </body>
                </html>
            `;
            
            // Avisamos o navegador do cliente: "Recebemos tudo ok (200), e tô te mandando uma página HTML de volta".
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            
            // Entregamos a página de sucesso pra ele comemorar!
            res.end(paginaSucesso);
        })

    // Se o pedido que chegou não foi nem um GET que a gente previu, nem o POST de '/aluno'... a gente não sabe o que é.
    } else {
        // Avisamos que não achamos (Erro 404).
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        // Mostramos um título simples na tela do usuário.
        res.end('<h1>Página não localizada!</h1>');
    }

});

// Essa última linha é o chefe gritando: "Abram as portas!". 
// Ela faz o servidor começar a escutar na porta 3001 e ficar esperando os clientes chegarem.
server.listen(port, host, () => {
    console.log(`Servidor rodando em: http://${host}:${port}`);
});