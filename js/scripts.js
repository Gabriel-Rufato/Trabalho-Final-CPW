function validaForm(){
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const ingresso = document.getElementById("ingresso").value.trim();
    const idade = document.getElementById("idade").value.trim();
    let diasMarcados = document.querySelectorAll('input[type="checkbox"]:checked');


    
     if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um email válido.");
        return;
    }

    if (ingresso === "" || isNaN(ingresso) || Number(ingresso) <= 0) {
        alert("Digite um número de ingresso válido.");
        return;
    }

    if (idade === "" || isNaN(idade) || Number(idade) < 12) {
        alert("Idade inválida. Permitido apenas maiores de 12 anos.");
        return;
    }

    if (diasMarcados.length === 0) {
        alert("Selecione pelo menos um dia.");
        return;
    }

    alert("Presença confirmada com sucesso!");

}