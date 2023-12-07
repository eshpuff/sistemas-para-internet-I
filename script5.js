function ex41() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    if (n1 % n2 === 0) {
        document.getElementById("resultado").innerHTML = "A divisão de " + n1 + " por " + n2 + " é exata.";
    }
    else {
        document.getElementById("resultado").innerHTML = "A divisão de " + n1 + " por " + n2 + " não é exata."

    }
}

function ex42() {
    let valorCompra = parseFloat(document.getElementById("valorCompra").value);

    if (valorCompra > 20) {
        let lucro = (valorCompra * 45) /100 ;
        let valorVenda = valorCompra + lucro
        document.getElementById("resultado").innerHTML = valorVenda.toFixed(2).split(".").join(",") + " R$.";
    }
    else {
        let lucro = (valorCompra * 30) /100;
        let valorVenda = valorCompra + lucro
        document.getElementById("resultado").innerHTML = valorVenda.toFixed(2).split(".").join(",") + " R$.";

    }
}

function ex43() {
    let salarioAtual = parseFloat(document.getElementById("salarioAtual").value);

    if (salarioAtual <= 400) {
        let novoSalario = salarioAtual + ((salarioAtual * 15) / 100)
        document.getElementById("resultado").innerHTML = "O percentual de aumento é de 15%, seu salário ficara: " + novoSalario.toFixed(2).split(".").join(",") + " R$.";
    }
    else if (salarioAtual > 400.01 && salarioAtual <= 700) {
        let novoSalario = salarioAtual + ((salarioAtual * 12) / 100)
        document.getElementById("resultado").innerHTML = "O percentual de aumento é de 12%, seu salário ficara: " + novoSalario.toFixed(2).split(".").join(",") + " R$.";
    }
    else if (salarioAtual > 700.01 && salarioAtual <= 1000) {
        let novoSalario = salarioAtual + ((salarioAtual * 10) / 100)
        document.getElementById("resultado").innerHTML = "O percentual de aumento é de 10%, seu salário ficara: " + novoSalario.toFixed(2).split(".").join(",") + " R$.";
    }
    else if (salarioAtual > 1000.01 && salarioAtual <= 1800) {
        let novoSalario = salarioAtual + ((salarioAtual * 7) / 100)
        document.getElementById("resultado").innerHTML = "O percentual de aumento é de 7%, seu salário ficara: " + novoSalario.toFixed(2).split(".").join(",") + " R$.";
    }
    else if (salarioAtual > 1800.01 && salarioAtual <= 2500) {
        let novoSalario = salarioAtual + ((salarioAtual * 5) / 100)
        document.getElementById("resultado").innerHTML = "O percentual de aumento é de 5%, seu salário ficara: " + novoSalario.toFixed(2).split(".").join(",") + " R$.";
    }
    else {
        document.getElementById("resultado").innerHTML = "Não há aumento."
    }
}

function ex44() {
    let massa = parseFloat(document.getElementById("massa").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = massa /(altura * altura);

    if (imc < 20) {
        document.getElementById("resultado").innerHTML = "Abaixo do Peso."
    } 
    else if (imc >= 20 && imc < 25) {
        document.getElementById("resultado").innerHTML = "Normal."
 
    }
    else if ( imc >= 25 && imc < 30) {
        document.getElementById("resultado").innerHTML = "Excesso de peso."
    }
    else if (imc >= 30 && imc <35) {
        document.getElementById("resultado").innerHTML = "Obesidade"
    }
    else {
        document.getElementById("resultado").innerHTML = "Obesidade mórbida"
    }


}