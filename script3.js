function ex21() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let resultado = a ** 2 + b ** 2 + c ** 2;

    document.getElementById("resultado").innerHTML = resultado;
}

function ex22() {
    let balasDisponiveis = parseFloat(document.getElementById("balasDisponiveis").value);
    let pessoas = parseFloat(document.getElementById("pessoas").value);
    let divisao = Math.floor(balasDisponiveis/pessoas);
    let resto = balasDisponiveis % pessoas;

    document.getElementById("resultado").innerHTML = "Cada pessoa fica com "+ divisao + " balas e sobram " + resto + " balas.";
}

function ex23() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let resultado = (a + b + c) ** 2;

    document.getElementById("resultado").innerHTML = resultado;

}

function ex24() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let d = parseFloat(document.getElementById("d").value);
    let produto = a * c;
    let soma = b + d;

    document.getElementById("resultado").innerHTML = "Produto de A e C: " + produto + ". Soma de B e D: " + soma;

}

function ex25() {}

function ex26() {
    let votosValidosA = parseFloat(document.getElementById("votosValidosA").value);
    let votosValidosB = parseFloat(document.getElementById("votosValidosB").value);
    let votosValidosC = parseFloat(document.getElementById("votosValidosC").value);
    let votosNulos = parseFloat(document.getElementById("votosNulos").value);
    let votosBranco = parseFloat(document.getElementById("votosBranco").value);

    let totalVotos = votosValidosA + votosValidosB + votosValidosC + votosNulos + votosBranco;

    let percentualA = (votosValidosA / totalVotos) * 100;
    let percentualB = (votosValidosB / totalVotos) * 100;
    let percentualC = (votosValidosC / totalVotos) * 100;
    let percentualNulos = (votosNulos / totalVotos) * 100;
    let percentualBranco = (votosBranco / totalVotos) * 100; 


    document.getElementById("resultado").innerHTML = "O número total de votos foi: " + totalVotos + ". Percentual de votos válidos para Candidato A: " + percentualA + "%. Percentual de votos válidos para Candidato B: " + percentualB +"%. Percentual de votos válidos para Candidato C: " + percentualC +"%. Percentual de votos nulos: " + percentualNulos + ". Percentual de votos em branco: " + percentualBranco +"%.";
}

function ex27() {

    let h = parseFloat(document.getElementById("h").value);
    let r = parseFloat(document.getElementById("r").value);
    let area = 2 * 3.14 * r * (h + r);
    let custoLata = 50;
    let capacidadeLata = 5;
    let cobertura = 3;

    let litrosNecessarios = area/ cobertura;
    let latasNecessarias = Math.ceil(litrosNecessarios / capacidadeLata
    );
    let custoTotal = latasNecessarias * custoLata;

    document.getElementById("resultado").innerHTML = "A quantidade de latas necessárias é: " + latasNecessarias + " e o valor: " + custoTotal + "R$";
    
}

function ex28() {
    let numero = parseFloat(document.getElementById("numero").value);
    let unidade = numero % 10;
    let dezena = Math.floor((numero / 10) % 10);
    let centena = Math.floor(numero/100);

    let numeroInertido = unidade * 100 + dezena * 10 + centena;

    document.getElementById("resultado").innerHTML = numeroInertido
}

function ex29() {
    let massa = parseFloat(document.getElementById("massa").value);
    let mols = massa / 12

    document.getElementById("resultado").innerHTML = "Número de mols: " + mols
}

function ex30() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
    let n4 = parseFloat(document.getElementById("n4").value);

    let media = (n1 + n2 + n3 + n4) / 4

    if (media >= 5) {
        document.getElementById("resultado").innerHTML = "Aprovado, média: " + media
    }
    else {
        document.getElementById("resultado").innerHTML = "Reprovado, média: " + media
    }
}