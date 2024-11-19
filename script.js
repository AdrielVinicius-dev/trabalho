function nota(){

    //Criando as variaveis
    var n1 = parseFloat(prompt("Digite sua primeira nota:"))
    var n2 = parseFloat(prompt("Digite sua segunda nota:"))
    var n3 = parseFloat(prompt("Digite sua terceira nota:"))
    //Somando e dividindo as variaveis
    var media = (n1 + n2 + n3) / 3;

    //definindo apenas uma casa decimal depois da virgula
    var media = media.toFixed(1);

    //Criando a condição
    if (media >= 6){
        alert(`Voçê foi aprovado. Sua nota foi ${media} parábens!`)
    }
      else {
        alert(`Voçê foi reprovado. Sua nota foi ${media} !!`)
    }  
}

//Criando a função
function contar(){

    //atribuindo as variaveis aos valores dos inputs
    var inicio = parseInt(document.getElementById("inicio").value);
    var fim = parseInt(document.getElementById("fim").value);
    var passo = parseInt(document.getElementById("passo").value);
    var resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "";

    //inicia a contagem
    let resultado = "<p>Contando: ";
    if (inicio < fim) {
        //contagem crescente
        for (let i = inicio; i <= fim; i += passo){
            resultado += i + " ";
        }
    } else {
        //contagem decrescente
        for (let i = inicio; i >= fim; i -= passo){
            resultado += i + " ";
        }
    }

    resultado += "</p>";

    resultDiv.innerHTML = (resultado);
}

//criando a array
const animais = ["Macaco", "Tigre", "Tubarão", "Cobra", "Leão"]

//chamando os itens da array
console.log("Segundo animal: ", animais[1]);
console.log("Ultimo animal: ", animais[animais.length - 1]);