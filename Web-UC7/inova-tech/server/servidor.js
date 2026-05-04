import http from "http";
import fs from "fs";
import { formatar_dados } from "./utilitários/format_formulario.js";
import path from 'path';

let listaAlunos = [];

const port = 3001;
const host = 'localhost';

const server = http.createServer((req, res) => {

    if (req.method === 'GET') {

        try {

            let caminho;

            if (req.url === '/') {
                caminho = './index/index.html';

            } else if (req.url === '/Cadastro') {
                caminho = './secretaria/cadastro/cadastro.html';

            } else if (req.url === '/alunos/json') {
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                return res.end(JSON.stringify(listaAlunos));

            } else if (req.url === '/alunos/html') {

                let linhasTabela = '';

                listaAlunos.forEach(aluno => {
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
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                return res.end(html);

            } else {
                caminho = `.${req.url}`

                if (!req.url.includes('.')) {
                    caminho += '.html';
                }
            }

            const extensao = path.extname(caminho);

            const typeVersion = {
                '.html': 'text/html; charset=utf-8',
                '.css': 'text/css',
                '.js': 'application/javascript',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.json': 'application/json; charset=utf-8'
            };

            const tipoConteudo = typeVersion[extensao] || 'application/octet-stream';

            const conteudoArquivo = fs.readFileSync(caminho);

            res.writeHead(200, { 'Content-Type': tipoConteudo });

            res.end(conteudoArquivo);

        } catch (erro) {
            console.error(`Arquivo não encontrado: ${req.url}`);

            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });

            res.end('<h1>Página não localizada!</h1>');
        }

    } else if (req.url === '/aluno' && req.method === 'POST') {

        let corpo = '';

        req.on('data', (parte) => {
            corpo += parte.toString();
        });

        req.on('end', () => {

            const aluno = formatar_dados(corpo);

            listaAlunos.push(aluno);

            console.log('Novo aluno cadastrado:', aluno);

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
                        <p>O aluno <strong>${aluno.nome}</strong> foi adicionado à lista.</p>
                        <a href="/Cadastro" class="botao-acao">Cadastrar Novo Aluno</a>
                    </div>
                </body>
                </html>
            `;

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

            res.end(paginaSucesso);
        })

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Página não localizada!</h1>');
    }

});

server.listen(port, host, () => {
    console.log(`Servidor rodando em: http://${host}:${port}`);
});