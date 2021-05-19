var input = document.getElementById("input"); // Botão de entrada/Saida
var number = document.querySelectorAll(".numbers div"); // Botões númericos
var operator = document.querySelectorAll(".operators div"); // Botões dos operadores
var result = document.getElementById("result"); // Botão de igual
var clear = document.getElementById("clear"); //Botão de limpar
var resultDisplayed = false; // Ficando de olho em qualquer saida exibida

// Adicionando manipuladores de clique para os botões numéricos
for(let i = 0; i < number.length; i++){
    number[i].addEventListener("click", function(e){
        // Armazenando a string de entrada e seu último caractere nas variaveis (usado mais tarde)
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        // Se o resultado nao for exibido, continue adicionando
        if(resultDisplayed === false){
            input.innerHTML += e.target.innerHTML;
        }
        else if(resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷"){
            // Se o resultado for exibido no momento e o usuário pressionou um operador
            // Precisamos continuar adicionando à string para a próxima operação
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        }
        else{
            // Se o resultado for exibido no momento e o usuário pressionou um número
            // Precisamos limpar a string de entrada e adicionar a nova entrada para iniciar a nova operação
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
        }
    });
}

// Adicionando manipuladores de clique aos botões numéricos
for (let i = 0; i < operator.length; i++){
    operator[i].addEventListener("click", function(e) {
        // Armazenando a string de entrada atual e seu último caractere nas variáveis ​​(usado mais tarde)
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        // Se o último caractere inserido for um operador, substitua pelo botao precionado
        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        }
        else if(currentString.length == 0){
            // Se a primeira tecla pressionada for um opearador, não faça nada
            alert("Digite um número primeiro");
        }
        else{
            // Se não basta adicionar o operador pressionado à entrada
            input.innerHTML += e.target.innerHTML;
        }
    });
}

// Clicando no botão igual
result.addEventListener("click", function(){
    // Esta é a string que iremos processar, por exemplo. -10 + 26 + 33-56 * 34/23
    var inputString = input.innerHTML;

    // Formando uma matriz de números. por exemplo, para a string acima, será: números = ["10", "26", "33", "56", "34", "23"]
    var numbers = inputString.split(/\+|\-|\×|\÷/g);

    // Formando uma série de operadores. para a string acima será: Operadores = ["+", "+", "-", "*", "/"]
    // Primeiro substituímos todos os números e pontos por uma string vazia e depois dividimos
    var operators = inputString.replace(/[0-9]|\./g, "").split("");

    console.log(inputString);
    console.log(operators);
    console.log(numbers);
    console.log("----------------------------");

    // Agora estamos percorrendo o array e fazendo uma operação por vez.
    // Primeiro divida, depois multiplique, depois subtração e depois adição
    // Conforme avançamos, alternamos os números originais e a matriz de operadores
    // The final element remaining in the array will be the output

    var divide = operators.indexOf("÷");
    while(divide != -1){
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    var multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }

    var subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("-");
    }

    var add = operators.indexOf("+");
    while (add != -1) {
        // Usar parseFloat é necessário, caso contrário, resultará em concatenação de string
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }

  input.innerHTML = numbers[0]; // Exibindo a saida
  resultDisplayed = true;
});

// Limpando a entrada ao pressionar C
clear.addEventListener("click", function() {
    input.innerHTML = "";
});