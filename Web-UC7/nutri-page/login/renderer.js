const bt_login = document.getElementById('botaoLogin')
bt_login.addEventListener('click', (event) => {
    event.preventDefault()
    const usuario = JSON.parse(localStorage.getItem('user'))
    
    const login_test = {
        email: document.getElementById('emailLogin').value,
        senha: document.getElementById('senhaLogin').value
    }
    if(login_test.email.trim() === '' || login_test.senha.trim() === ''){
        alert('Preencha corretamente os campos!')
        location.reload()
        return
    }
    
    if(usuario.email === login_test.email && usuario.senha === login_test.senha){
        alert(`Bem vindo, ${usuario.nome.toUpperCase()}!`)
        window.location.href = '../painel/index.html'
        return
    }

    alert('Dados incorretos, Tente novamente!')
})