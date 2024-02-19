function parOuImpar(){
    let numero = prompt("Digite um numero para saber se é par ou ímpar:");

if(numero % 2 == 0){
    console.log(`O número ${numero} é par`);
} else{
    console.log(`O número ${numero} é ímpar`);
}
}


function calculadora(){
    let operacao = prompt("Qual operação deseja?");
    let num1 = parseInt(prompt(`Digite o primeiro número para ${operacao}:`));
    let num2 = parseInt(prompt(`Digite o segundo número para ${operacao}:`));
    let resultado = 0;
    
    switch(operacao){
        case 'multiplicar':
            resultado = num1 * num2;
            alert(`O resultado da multiplicação é: ${resultado}`);
        case 'dividir':
            resultado = num1 / num2;
            alert(`O resultado da divisão é: ${resultado}`);
        case 'somar':
            resultado = num1 + num2;
            alert(`O resultado da soma é: ${resultado}`);
        case 'subtrair':
            resultado = num1 - num2;
            alert(`O resultado da subtração é: ${resultado}`);
        default:
            return "Operação inválida.";
    }

}

function conversorDeTemperatura(){
    let tipoTemperatura = prompt("Vai digitar a temperatura em celsius ou fahrenheit? ");
    let grau = parseFloat(prompt("Digite o valor da temperatura que deseja converter:"));
    let grauResultado = 0;

    if (tipoTemperatura == 'celsius') {
        grauResultado =  ( grau * 9/5) + 32;  // Celsius para Fahrenheit
        alert(`${grau} celsius são ${grauResultado} fahrenheit`);
    } else if (tipoTemperatura == 'fahrenheit') {
        grauResultado = (grau - 32) * 5/9;  // Fahrenheit para Celsius
        alert(`${grau} fahrenheit são ${grauResultado} celsius`);
    } else {
        alert("Escala inválida");
    }
}

function arrayNumeros(){
    let lista1 = [1,2,2,3];
    let lista2 = [4,5,5,6];
    let concatena = lista1.concat(lista2);
    concatena.splice(5,1); // apaga item da lista
    embaralha(concatena);
    console.log(concatena);
    let novaListaSemDuplicatas = removerDuplicatas(concatena);
   console.log("Remover duplicatas:", novaListaSemDuplicatas);
   
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


// Função para remover duplicatas de um array
function removerDuplicatas(array) {
    return [...new Set(array)];
  }

  function diaDaSemana(){
    let dia = prompt("Digite o dia da semana de hoje:");
    if (dia == "sábado" || dia== "domingo"){
        alert('Ótimo final de semana');
    } else{
        alert('Boa semana');
    }
  }
  
  function calcularMedia(){
    
    let qtdNumeros = prompt('Digite a quantidade de notas para o cálculo da média:');
    let soma = 0;
    let contador = 0;

    while(contador < qtdNumeros){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    contador++;
    }

    let media = soma / qtdNumeros;

    console.log(media);


  }
