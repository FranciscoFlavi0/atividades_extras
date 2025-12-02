function getById(id) {
    return document.getElementById(id);
}
// input simples
let nome = getById('nome');

getById('botao1').addEventListener('click', () => {
    getById('resultado1').innerText = nome.value;
});

// select simples
let cidades = getById('cidades');

getById('botao2').addEventListener('click', () => {
    let cidade = cidades.value;
    getById('resultado2').innerText = cidade;
});

// checkbox simples
let interesse = getById('interesse');

getById('botao3').addEventListener('click', () => {
    if (interesse.checked) {
        getById('resultado3').innerText = 'Em breve receberá nossas novidades';
    } else {
        getById('resultado3').innerText = '=(';
    }
});

// contar
let texto = getById('texto');
let resultado7 = getById('resultado7');
let botaoContar = getById('botaoContar');

botaoContar.addEventListener('click', () => {
    resultado7.innerText = texto.value.length + ' caractere(s)';
});

// maiusculo
let texto8 = getById('texto8');

getById('botaoMaiusculo').addEventListener('click', () => {
    texto8.value = texto8.value.toUpperCase()
});

// maior numero
let n91 = getById('n91');
let n92 = getById('n92');
let resultado9 = getById('resultado9');

getById('botaoMaior').addEventListener('click', () => {
    let n1 = Number(n91.value);
    let n2 = Number(n92.value);
    if (n1 > n2) {
        resultado9.innerText = `${n1} é maior`;
    } else {
        if (n1 < n2) {
            resultado9.innerText = `${n2} é maior`;
        } else {
            resultado9.innerText = "São iguais";
        }
    }
});

// numero aleatorio
let n101 = getById('n101');
let n102 = getById('n102');
let resultado10 = getById('resultado10');

getById('botaoRandomico').addEventListener('click', () => {
    let diferenca = Number(n102.value) - Number(n101.value);
    let numero = Math.random() * diferenca+1;
    resultado10.innerText = Math.round(numero);
});

//sanduiche for
/*
let sanduiche = getById('sanduiche');
let hamburger = getById('hamburger');
let batata = getById('batata');
let molho = getById('molho');
let refrigerante = getById('refrigerante');
let totalConta = getById('totalConta');

getById('botaoCalcularConta').addEventListener('click', () => {
    let soma = 0;

    if (sanduiche.checked) {
        soma = soma + Number(sanduiche.value);
    }
    if (batata.checked) {
        soma = soma + Number(batata.value);
    }
    if (refrigerante.checked) {
        soma = soma + Number(refrigerante.value);
    }
    if (molho.checked) {
        soma = soma + Number(molho.value);
    }

    if (hamburger.checked) {
        soma = soma + Number(hamburger.value);
    }

    totalConta.innerText = soma.toLocaleString('pt-BR', {style: 'currency', currency : 'BRL'});

});
*/
let totalConta = getById('totalConta');

getById('botaoCalcularConta').addEventListener('click', () => {
    let soma = 0;
    let itens = ['sanduiche', 'hamburger', 'batata', 'molho', 'refrigerante'];

    for (let i = 0; i < itens.length; i++) {
        let item = getById(itens[i]);
        if (item.checked) {
            soma += Number(item.value);
        }
    }

    totalConta.innerText = soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
});