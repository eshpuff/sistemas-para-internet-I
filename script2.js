function ex11() {
    let raio = parseFloat(document.getElementById("raio").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let volume = 3.14 * altura * raio ** 2;

    document.getElementById("volume").innerHTML = volume;
}

function ex12() {
    let c = parseFloat(document.getElementById("c").value);
    let f = (9 * c + 160)/5;

    document.getElementById("f").innerHTML = f +"ºF";

}

function ex13() {
    let f = parseFloat(document.getElementById("f").value);
    let c = 5 * (f - 32) / 9;

    document.getElementById("c").innerHTML = c + "ºC";
}

function ex14() {
    let valorHora = parseFloat(document.getElementById("valorHora").value);
    let horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value);
    let inss = parseFloat(document.getElementById("inss").value);

    let salarioBruto = valorHora * horasTrabalhadas;
    let descontoINSS = (inss * salarioBruto) / 100;
    let salarioLiquido = salarioBruto - descontoINSS;

    document.getElementById("salarioLiquido").innerHTML = salarioLiquido

}

function ex15() {
    let horasViagem = parseFloat(document.getElementById("t").value);
    let velocidadeMedia = parseFloat(document.getElementById("vm").value);

    let distancia = horasViagem * velocidadeMedia;
    let litrosUsados = distancia / 12;

    document.getElementById("resultado").innerHTML = "A distância percorrida foi de " + distancia +"km e a quantidade de litros utilizada na viagem foi de: " + litrosUsados 
}

function ex16() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let temp = a;

    a = b;
    b = temp;

    document.getElementById("resultado").innerHTML = "A: " + a + "B: " + b
}

function ex17() {
    let comprimento = parseFloat(document.getElementById("comprimento").value);
    let largura = parseFloat(document.getElementById("largura").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let volume = comprimento * largura * altura;

    document.getElementById("resultado").innerHTML = "O volume é: " +volume
}

function ex18() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let resultado = (a - b) ** 2;

    document.getElementById("resultado").innerHTML = resultado

}

function ex19() {
    let dolar = parseFloat(document.getElementById("dolar").value);
    let cotacaoDolar = parseFloat(document.getElementById("cotacaoDolar").value);

    let reais = dolar * cotacaoDolar;

    
    document.getElementById("resultado").innerHTML = reais.toFixed(2).split(".").join(",") + "R$."

}

function ex20() {
    let real = parseFloat(document.getElementById("real").value);
    let cotacaoDolar = parseFloat(document.getElementById("cotacaoDolar").value);

    let dolares =real / cotacaoDolar

    document.getElementById("resultado").innerHTML = dolares.toFixed(2).split(".").join(",")+ "US$."

}