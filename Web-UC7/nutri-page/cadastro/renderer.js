const bt_cad = document.getElementById('botaoCadastro')
bt_cad.addEventListener('click', (event) => {
    event.preventDefault()
    const usuario = {
        nome: document.getElementById('nomeCadastro').value,
        email: document.getElementById('emailCadastro').value,
        senha: document.getElementById('senhaCadastro').value
    }
    if(usuario.senha.trim() === '' || usuario.nome.trim() === ''){
        alert('Dados inválidos!')
        location.reload() 
        return
    }
    localStorage.setItem('user', JSON.stringify(usuario))
    window.location.href = '../login/login.html'
})