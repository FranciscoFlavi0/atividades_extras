// Função auxiliar para pegar elementos
function getById(id) {
    return document.getElementById(id);
}

// ==================== QUESTÃO 1 ====================
function botaoCalcular() {
    const peso = parseFloat(getById('peso').value);
    const altura = parseFloat(getById('altura').value);
    const sexo = getById('sexo').value;
    const resultado = getById('resultado');


    if (!peso || !altura || !sexo) {
        resultado.textContent = "Preencha todos os campos!";
        return;
    }

    const imc = peso / (altura * altura);
    let mensagem = `Seu IMC é ${imc.toFixed(2)}. `;


    if (sexo === "masculino") {
        if (imc < 20.7) mensagem += "Abaixo do peso.";
        else if (imc < 26.4) mensagem += "Peso ideal.";
        else mensagem += "Acima do peso.";
    } else {
        if (imc < 19.4) mensagem += "Abaixo do peso.";
        else if (imc < 25.8) mensagem += "Peso ideal.";
        else mensagem += "Acima do peso.";
    }


    const agora = new Date();
    const dataHora = agora.toLocaleString();

    resultado.innerHTML = `${mensagem}<br>Última verificação: ${dataHora}`;

    //O select permite escolher o sexo;
    //A fórmula do IMC é peso / (altura²);
    //São usadas faixas diferentes de IMC conforme o sexo;
    //A data e hora são exibidas com new Date().toLocaleString().
};

// ==================== QUESTÃO 2 ====================

let votos = [0, 0, 0]; // índice 0 = A, 1 = B, 2 = C

function votar() {
    const candidato = getById("candidato").value;
    votos[candidato]++; // soma mais 1 voto ao candidato escolhido
    alert(`Voto registrado para o candidato escolhido ${String.fromCharCode(65 + parseInt(candidato))}`);
}
//String.fromCharCode(65 + candidato) Converte o número 0, 1, 2 em letras A, B, C.

//votar(); Pega o valor do <select> e incrementa o voto correspondente no array votos.
//Mostra um alert confirmando o voto.


function apurar() {
    const totalVotos = votos[0] + votos[1] + votos[2];
    const resultado2 = getById("resultado2");

    //apurar(); Soma todos os votos e calcula a porcentagem de cada candidato.
    //Se totalVotos == 0, mostra um alerta informando que não há votos.

    if (totalVotos === 0) {
        alert("Nenhum voto foi registrado!");
        resultado2.textContent = "";
        return;
    }

    //Calcular porcentagem
    const percA = ((votos[0] / totalVotos) * 100).toFixed(2);
    const percB = ((votos[1] / totalVotos) * 100).toFixed(2);
    const percC = ((votos[2] / totalVotos) * 100).toFixed(2);

    resultado2.innerHTML = `<strong>Resultado da Votação:</strong><br>
                            Candidato A: ${votos[0]} votos (${percA}%)<br>
                            Candidato B: ${votos[1]} votos (${percB}%)<br>
                            Candidato C: ${votos[2]} votos (${percC}%)
    `;
}

function zerar() {
    votos = [0, 0, 0];
    getById("resultado2").textContent = "";
    alert("Todos os votos foram zerados!");
}

//zerar() Reseta o array de votos para [0,0,0] e limpa o resultado.

// ==================== QUESTÃO 3 ====================

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 5;
let jogoAtivo = true;

function verificarNumero() {
    const input = getById("numero");
    const resultado3 = getById("resultado3");

    if (!jogoAtivo) {
        resultado3.textContent = "O jogo terminou!."; //Clique em Reiniciar para jogar novamente.
        return;
    }

    const palpite = parseInt(input.value);

    if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        resultado3.textContent = "Digite um número válido entre 1 e 10.";
        return;
    }

    if (palpite === numeroSecreto) {
        resultado3.textContent = `Parabéns! Você acertou! O número era ${numeroSecreto}.`;
        jogoAtivo = false;
        return;
    }

    tentativas--;

    if (tentativas > 0) {
        resultado3.textContent = `Errado! Tentativas restantes: ${tentativas}`;
    } else {
        resultado3.textContent = `Suas chances acabaram! O número era ${numeroSecreto}.`;
        jogoAtivo = false;
    }
}

//Reniciando às tentativas
//function reiniciar() {
    //numeroSecreto = Math.floor(Math.random() * 10) + 1;
    //tentativas = 5;
    //jogoAtivo = true;
    //document.getElementById("resultado5").textContent = "";
    //document.getElementById("numero").value = "";
    //alert("Novo jogo iniciado! Boa sorte!");
//}