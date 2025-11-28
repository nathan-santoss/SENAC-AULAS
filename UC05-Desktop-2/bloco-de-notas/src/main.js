import { app, BrowserWindow, ipcMain, Menu, dialog} from "electron";
import path from 'path'
import { fileURLToPath } from "url";
import fs from 'fs'
import { dir } from "console";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const preload = path.join(__dirname, 'preload.js')


// CONFIGURAÇÕES DAS JANELAS >>>>>>>>>>>>>>>>>>

// JANELA PRINCIPAL >>>>
let janela = null
let arquivoAtual = null
const criarJanela = () => {
    janela = new BrowserWindow({
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            devTools: false,
            sandbox: false,
            preload: preload
        },
        fullscreenable: false,
        autoHideMenuBar: false
    })

    // Menu principal >>>>>>>>
    const template = [
        // primeiro menu
        {
            label: 'Arquivo',
                submenu: [
                    {label: 'Nova Janela', click: () => criarJanela()},
                    {label: 'Salvar', click: () => salvar_como()},
                    {label: 'Abrir', submenu: [
                        {label: 'Leitura', click: () => abrirArquivo()},
                        {label: 'Editar', click: () => editarArquivo()}
                    ]}
                ]
        },
        {
            label: 'Editar', submenu: [
                {label: 'Desfazer', role: 'undo'},
                {label: 'Refazer', role: 'redo'},
                {label: 'Copiar', role: 'copy'},
                {label: 'Recortar', role: 'cut'},
                {label: 'colar', role: 'paste'},
                {label: 'Selecionar tudo', role: 'selectAll'},
                {label: 'Limpar tudo', click: () => clear_all()},
            ]
        },
        {
            label: 'Exibir',
                submenu: [
                    {label: 'Ampliar', role: 'ZoomIn'},
                    {label: 'Reduzir', role: 'ZoomOut'},
                    {label: 'FullScreen', click: () => {
                        if(janela.maximize()){return}
                        janela.maximize(true)
                    }},
                    {label: 'Modo Janela', click: () => {
                        if(janela.unmaximize()){return}
                        janela.unmaximize(true)
                    }}
                ]
        },
        {
            label: 'Encerrar', role: 'quit'
        }
    ]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
    // <<<<<<<<<< Menu principal


    janela.loadFile(path.join(__dirname, '../app/index.html'))
    // janela.removeMenu()
    janela.webContents.on('did-finish-load', () => {
        janela.webContents.setZoomLevel(0);
    });
}
//<<<<<< JANELA PRINCIPAL

// FUNCIONALIDADES DO MENU PERSONALIZADO >>>>>>>>>>>


// Funcionalidade para leitura de arquivo >>>>>>>
const abrirArquivo = () => {
    const caminhoSelecionado = dialog.showOpenDialogSync(janela, {
        title: 'Selecione o arquivo',
        properties: ['openFile'],
        filters: [{name: 'Textos', extensions: ['txt']}]
    })
    if(!caminhoSelecionado){
        console.log('Usuário cancelou a seleção');
        return
    }
    arquivoAtual = caminho
    console.log('Arquivo selecionado pelo usuário: ', caminhoSelecionado[0])
    const arquivo_escolhido = fs.readFileSync(caminhoSelecionado[0], 'utf-8')
    const html_leitura = `
        <!DOCTYPE html>
        <html lang="pt0br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Arquivo de leitura</title>
        </head>
        <body>
        <h1>Seu arquivo:</h1><br><br>
        <h3>${arquivo_escolhido}</h1>
        </body>
        </html>
        `
    openRead_window(html_leitura)
    
}
let janelaDe_leitura = null
const openRead_window = (html) => {
    janelaDe_leitura = new BrowserWindow({
        width: 800, height: 600,
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            devTools: false,
            sandbox: false,
            preload: preload
        },
        fullscreenable: false,
        autoHideMenuBar: false
    })
    // Menu leitura >>>>>>>>
    const template = [
        // primeiro menu
        {
            label: 'Arquivo',
                submenu: [
                    {label: 'Salvar', click: () => salvar_como()},
                    {label: 'Abrir', click: () => abrirArquivo()}
                ]
        }
    ]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
    // <<<<<<<<<< Menu leitura
    janelaDe_leitura.loadURL('data:text/html;charset=utf-8,' + encodeURIComponent(html))
    arquivoAtual = null
}
//<<<<<<<<<<< Funcionalidade para leitura de arquivo

// Funcionalidade para salvar-como >>>>>>>>>>
let caminho = null
const salvar_como = () => {
    if(arquivoAtual){ // se arquivo atual tem JÁ TEM caminho
        caminho = arquivoAtual
    }
    else{
        caminho = dialog.showSaveDialogSync(janela, {
            title: 'Salvar como',
            buttonLabel: 'Salvar como',
            filters: [{
                name: 'Textos', extensions: ['txt']
            }],
            defaultPath: 'novo-arquivo'
        })
        if(!caminho){
            return
        }
    }

    console.log(`Caminho do objeto: ${caminho}`);
    janela.webContents.send('solicitando-salvamento', caminho)
}
ipcMain.on('salvar-como', (event, arquivo) => {
    try{
        const conteudo = fs.writeFileSync(caminho, arquivo, 'utf-8')
        arquivoAtual = null
    }catch(err){
        console.error(`Erro ao tentar salvar: ${err}`)
    }
})
// <<<<<<<< Funcionalidade para salvar-como

// >>>>>>>>>>> Funcionalidade para edição de arquivo
const editarArquivo = () => {
    const caminhoSelecionado = dialog.showOpenDialogSync(janela, {
        title: 'Selecione o arquivo',
        properties: ['openFile'],
        filters: [{name: 'Textos', extensions: ['txt']}]
    })
    if(!caminhoSelecionado){
        console.log('Usuário cancelou a seleção');
        return
    }
    arquivoAtual = caminhoSelecionado[0]
    const conteudo_selecionado = fs.readFileSync(caminhoSelecionado[0], 'utf-8')
    janela.webContents.send('solicitacao-edicao', conteudo_selecionado)
}
// <<<<<<<<<<< Funcionalidade para edição de arquivo

// Funcionalidade para limpeza do bloco completo >>>>>>>
const clear_all = () => {
    janela.webContents.send('clear-all')
    arquivoAtual = null
}
// <<<<<<<<<< Funcionalidade para limpeza do bloco completo

//<<<<<< FUNCIONALIDADES DO MENU PERSONALIZADO
app.whenReady().then(() => {
    criarJanela()
})