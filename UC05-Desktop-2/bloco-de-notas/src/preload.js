import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api', {
    leitura: () => ipcRenderer.on('leitura-de-arquivo', (event, arquivo_escolhido) => {
        ipcRenderer.send('resposta-leitura')
    }),
    salvar_como: () => ipcRenderer.on('solicitando-salvamento', () => {
        const arquivo = document.getElementById('box')
        ipcRenderer.send('salvar-como', arquivo.value)
        arquivo.value = ''
    }),
    editar_arquivo: () => ipcRenderer.on('solicitacao-edicao', (event, conteudo) => {
        document.getElementById('box').value = ''
        document.getElementById('box').value = `${conteudo}`
    }),
    clear: () => ipcRenderer.on('clear-all', () => document.getElementById('box').value = '')
})
