function ex31() {
    let v1 =  parseFloat(document.getElementById("v1").value);
    let v2 = parseFloat(document.getElementById("v2").value);


    if (v1 > v2) {
        let resultado = v1 - v2;
        document.getElementById("resultado").innerHTML = resultado;
    }
    if (v2 > v1) {
        let resultado = v2 - v1;
        document.getElementById("resultado").innerHTML = resultado;

    }

}

function ex32() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
    let n4 = parseFloat(document.getElementById("n4").value);

    let media = (n1 + n2 + n3 + n4) / 4;

    if (media >= 7) {
        document.getElementById("resultado").innerHTML = "Aprovado, média: " + media;

    }
    else {
        document.getElementById("resultado").innerHTML = "Reprovado, média: " + media;
        let exame = parseFloat(prompt("Digite a nota do exame:"));

        let novaMedia = media * 0.6 + exame * 0.4;
        if (novaMedia >= 5) {
            document.getElementById("resultado").innerHTML = "Aprovado, média: " + novaMedia 
        }
        else {
            document.getElementById("resultado").innerHTML = "Reprovado, média: " + novaMedia
        }

    }
}

function ex33 () {
    let numero = parseFloat(document.getElementById("numero").value);

    if (numero >= 1 && numero <= 9) {
        document.getElementById("resultado").innerHTML = "O valor esta na faixa permitida";
    }
    else {
        document.getElementById("resultado").innerHTML = "O valor esta fora da faixa permitida";
    }
}

function ex34() {
    let nome = document.getElementById("nome").value;
    let sexo = document.getElementById("sexo").value;

    if (sexo === "feminino") {
        document.getElementById("resultado").innerHTML = "Ilma. Sra. " + nome + " vai si fude.";
    }

    if (sexo === "masculino") {
        document.getElementById("resultado").innerHTML = "Ilmo. Sr. " + nome + " vai si fude.";
    }
}

function ex35() {
    let numero = parseFloat(document.getElementById("numero").value);

    if (numero % 2 === 0) {
        document.getElementById("resultado").innerHTML = "O número é par."
    }
    else {
        document.getElementById("resultado").innerHTML = "O número é impar."
    }
}

function ex36() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    if (a <= 0 || b <= 0 || c <= 0) {
        document.getElementById("resultado").innerHTML = "Os valores inseridos não formam um triângulo.";
    }
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            document.getElementById("resultado").innerHTML = "Triângulo equilátero.";
        }
        else if (a === b || b === c || a === c) {
            document.getElementById("resultado").innerHTML = "Triângulo isóceles.";
        }
        else {
            document.getElementById("resultado").innerHTML = "Triângulo escaleno.";
        }
    } 

}

function ex37() {
    let v1 = parseFloat(document.getElementById("v1").value);
    let v2 = parseFloat(document.getElementById("v2").value);
    let v3 = parseFloat(document.getElementById("v3").value);
    let temp;

    if (v1 > v2) {
        temp = v1;
        v1 = v2;
        v2 = temp;
    }

    if (v2 > v3) {
        temp = v2;
        v2 = v3;
        v3 = temp;
    }
    if (v1 > v2) {
        temp = v1;
        v1 = v2;
        v2 = temp;
    }

    document.getElementById("resultado").innerHTML = v1 + ", " + v2 + ", " +v3
}

function ex38() {
    let numero = parseFloat(document.getElementById("numero").value);
    
    if (numero >= 0 && numero <= 10) {
        if (numero === 0) {
            document.getElementById("resultado").innerHTML = "O número zero esta na faixa permitida";
        }
        if (numero === 1) {
            document.getElementById("resultado").innerHTML = "O número um esta na faixa permitida";
            }
        if (numero === 2) {
            document.getElementById("resultado").innerHTML = "O número dois esta na faixa permitida";
            }
        if (numero === 3) {
            document.getElementById("resultado").innerHTML = "O número três esta na faixa permitida";
            }
        if (numero === 4) {
            document.getElementById("resultado").innerHTML = "O número quatro esta na faixa permitida";
            }
        if (numero === 5) {
            document.getElementById("resultado").innerHTML = "O número cinco esta na faixa permitida";
            }
        if (numero === 6) {
            document.getElementById("resultado").innerHTML = "O número seis esta na faixa permitida";
            }
        if (numero === 7) {
            document.getElementById("resultado").innerHTML = "O número sete esta na faixa permitida";
            }
        if (numero === 8) {
            document.getElementById("resultado").innerHTML = "O número oito esta na faixa permitida";
            }
        if (numero === 9) {
            document.getElementById("resultado").innerHTML = "O número nove esta na faixa permitida";
            }
        if (numero === 10) {
            document.getElementById("resultado").innerHTML = "O número dez esta na faixa permitida";
            }

    }
    else {
        document.getElementById("resultado").innerHTML = "O valor esta fora da faixa permitida";
    }
}

function ex39() {
    let numero = parseFloat(document.getElementById("numero").value);

    if (numero % 2 === 0) {
        document.getElementById("resultado").innerHTML = numero / 2
    }
    else {
        document.getElementById("resultado").innerHTML = numero ** 2
    }
}

function ex40() {
    let numero = parseFloat(document.getElementById("numero").value);

    if (numero % 3 === 0) {
        document.getElementById("resultado").innerHTML = "É multiplo de 3!"
    }
    else {
        document.getElementById("resultado").innerHTML = "Não é multiplo de 3 :("
    }
}