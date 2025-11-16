function getById(id) {
    return document.getElementById(id);
}

// ==================== QUESTÃO 1 ====================
getById("botaoCalcular").addEventListener("click", function () {
    const peso = parseFloat(getById('peso').value);
    const altura = parseFloat(getById('altura').value);
    const resultado = getById('resultado');

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        resultado.textContent = "Por favor, insira valores válidos.";
        resultado.style.color = "red";
        return;
    }

    const imc = peso / (altura * altura);
    let mensagem = "";

    if (imc < 18.5) {
        mensagem = "É fundamental procurar um médico ou nutricionista para uma avaliação completa, pois a causa do baixo peso pode ser séria.";
    } else if (imc < 25) {
        mensagem = "Continue cuidando da sua saúde!";
    } else if (imc < 30) {
        mensagem = "Atenção à alimentação!";
    } else {
        mensagem = "Procure orientação médica!";
    }

    resultado.style.color = "black";
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)}: ${mensagem}`;

});


getById("botaoLimpar").addEventListener("click", limparCampos);

function limparCampos() {
    getById('peso').value = "";
    getById('altura').value = "";
    getById('resultado').textContent = "";
}

// ==================== QUESTÃO 2 ====================
let votos = [0, 0, 0];
const nomes = ["Candidato A", "Candidato B", "Candidato C"];

function votar() {
    const escolhido = parseInt(getById("candidato").value);
    votos[escolhido]++;
    mostrarVotos();
}

function apurar() {
    let maior = votos[0];
    let vencedor = nomes[0];

    for (let i = 1; i < votos.length; i++) {
        if (votos[i] > maior) {
            maior = votos[i];
            vencedor = nomes[i];
        }
    }

    getById("resultado2").innerHTML = `${vencedor} está na frente com ${maior} voto(s)!`;
}

function zerar() {
    for (let i = 0; i < votos.length; i++) {
        votos[i] = 0;
    }
    getById("resultado2").innerHTML = "Contadores zerados!";
}

function mostrarVotos() {
    let texto = "Resultado parcial:<br>";
    for (let i = 0; i < nomes.length; i++) {
        texto += `${nomes[i]}: ${votos[i]} voto(s)<br>`;
    }
    getById("resultado2").innerHTML = texto;
}

function atualizarCheckbox() {
    if (getById("tempoReal").checked) {
    } else {
        getById("resultado2").innerHTML = "";
    }
}

// ==================== QUESTÃO 3 ====================

function verificarNumero() {
    const numeroEscolhido = 7;
    const numeroUsuario = parseInt(getById('numero').value);
    let resultado3 = '';

    if (numeroUsuario > numeroEscolhido) {
        resultado3 = 'Maior que o número!';
    } else if (numeroUsuario < numeroEscolhido) {
        resultado3 = 'Menor que o número!';
    } else if (numeroUsuario === numeroEscolhido) {
        resultado3 = 'Acertou!';
    } else {
        resultado3 = 'Por favor, insira um número válido entre 1 e 10.';
    }

    getById('resultado5').innerText = resultado3;
}

let numeroEscolhido = null; // número secreto

function iniciarJogo() {
    const min = parseInt(getById("min").value);
    const max = parseInt(getById("max").value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        getById("intervaloInfo").innerText =
            "Por favor, insira um intervalo válido.";
        return;
    }

    // Número aleatório dentro do intervalo
    numeroEscolhido = Math.floor(Math.random() * (max - min + 1)) + min;

    getById("intervaloInfo").innerText =
        `O número secreto está entre ${min} e ${max}.`;
}

function verificarNumero() {
    const numeroUsuario = parseInt(getById('numero').value);
    let resultado3 = '';

    // Se o jogo ainda não começou
    if (numeroEscolhido === null) {
        getById('resultado3').innerText = "Clique em 'Iniciar jogo' primeiro.";
        return;
    }

    if (isNaN(numeroUsuario)) {
        resultado3 = "Digite um número válido!";
    }
    else if (numeroUsuario > numeroEscolhido) {
        resultado3 = 'Maior que o número!';
    }
    else if (numeroUsuario < numeroEscolhido) {
        resultado3 = 'Menor que o número!';
    }
    else {
        resultado3 = 'Acertou!';
    }

    getById('resultado3').innerText = resultado3;
}
