// function media() {
//     let nota1 = document.getElementById("nota1").value;
//     let nota2 = document.getElementById("nota2").value;
//     let nota3 = document.getElementById("nota3").value;
//     let nota4 = document.getElementById("nota4").value;
//     soma = parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)
//     media = soma / 4
//     if (media >= 7) {
//         x = "Aprovado.";
//     }
//     else x = "Reprovado."
//     alert("Sua media é: "+media+". E você foi: "+x)
// }

function hora() {
    let hora = new Date().getHours();
    if(hora<12) {
        alert("Bom dia!")
    }
    else if (hora > 12 && hora < 18) {
        alert("Boa tarde!")
    }
    else {
        alert("Boa noite")
    }
}

function ex3() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let output = "";

    if (n1 <= n2) {
        for (let i = n1; i <= n2; i++) {
            output += i + "<br>";
        }
    } else {
        for (let i = n1; i >= n2; i--) {
            output += i + "<br>";
        }
    }
    document.getElementById("resultado").innerHTML = output;
}

function ex4() {
    let v1 = parseInt(document.getElementById("v1").value);
    let v2 = parseInt(document.getElementById("v2").value);
    let v3 = parseInt(document.getElementById("v3").value);
    let v4 = parseInt(document.getElementById("v4").value);
    let v5 = parseInt(document.getElementById("v5").value);
    let menor = 100000;
    let maior = 0;
    
    if (v1 < menor) {
        menor = v1;
    }
    if (v2 < menor) {
        menor = v2;
    }
    if (v3 < menor) {
        menor = v3;
    }
    if (v4 < menor) {
        menor = v4;
    }
    if (v5 < menor) {
        menor = v5;
    }   
    
    if (v1 > maior) {
        maior = v1
    }
    if (v2 > maior) {
        maior = v2
    }    
    if (v3 > maior) {
        maior = v3
    }    
    if (v4 > maior) {
        maior = v4
    }    
    if (v5 > maior) {
        maior = v5
    }

    document.getElementById("resultadoMenor").innerHTML = menor
    document.getElementById("resultadoMaior").innerHTML = maior
}

function ex5() {
    // let cont = 816;
    let inicio = 86;
    let fim = 900;
    let resposta = "";
    let soma = 0;


    for (let i = inicio; i <= fim; i += 2) {
        resposta += i + ", "
        soma += i
    }

    document.getElementById("pares").innerHTML = resposta
    document.getElementById("soma").innerHTML = soma
}


function ex6() {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
    for (let i = 1; i <= 100; i++) {
        let resposta = "";
        
        if (i % 3 === 0) {
            resposta += "DING";
        }
        if (i % 5 === 0) {
            resposta += "DOING";
        }
        if (i % 7 === 0) {
            resposta += "DUNG";
        }
        if (resposta === "") {
            resposta = i;
        }
        resultadoDiv.innerHTML += "<p>" + resposta + "<p/>";
    }
}

function ex7(elemnt, clr)  {
    elemnt.style.color = clr
}


function ex9() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let soma = 0;
    let subtracao = 0;
    let divisao = 0;
    let multiplicacao = 0;

    soma = valor1 + valor2;
    subtracao = valor1 - valor2;
    divisao = valor1 / valor2; 
    multiplicacao = valor1 * valor2;

    document.getElementById("soma").innerHTML = soma;
    document.getElementById("subtracao").innerHTML = subtracao;
    document.getElementById("divisao").innerHTML = divisao;
    document.getElementById("multiplicacao").innerHTML = multiplicacao;

}

function ex10() {
    let raio = parseFloat(document.getElementById("raio").value);
    let area = 3.14 * raio ** 2;

    document.getElementById("area").innerHTML = "A área do círculo é: " + area;
}
