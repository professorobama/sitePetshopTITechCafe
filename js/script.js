// Adicionando funcionalidade ao formulário de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de validação de login
    if (username === "usuario" && password === "senha") {
        alert("Login realizado com sucesso!");
        // Redirecionar para a página principal ou dashboard
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
});