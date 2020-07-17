
//  console.log("Oi mundo")
//  alert("Olá Mundo!")
// console.log(document.querySelector("h2"));
// var tituloH2 = document.querySelector("#tituloTabela")
// tituloH2.textContent = "Os Fitness"
// console.log(tituloH2)

//Pegar textos de celula em tabela e calcular IMC
var pacientes = document.querySelectorAll(".paciente")


for (var index = 0; index < pacientes.length; index++) {
    var paciente = pacientes[index];
    console.log(paciente.querySelector(".info-peso"));
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var imc = peso / (altura * altura);

    //Validacao basica com operadores logicos        
    var pesoEValido = true;
    var alturaEValida = true;
    var tdImc = paciente.querySelector(".info-imc");

    if (peso <= 0 || peso > 1000) {
        pesoEValido = false;
        tdImc.textContent = "Peso Inválido";
        //paciente.style.backgroundColor="lightCoral"
        paciente.classList.add("paciente-invalido")
    }

    if (altura <= 0 || altura >= 4.00) {
        alturaEValida = false;
        tdImc.textContent = "Altura Inválida";
        //paciente.style.backgroundColor="lightCoral"
        paciente.classList.add("paciente-invalido")

    }

    if (alturaEValida && pesoEValido) {
        tdImc.textContent = imc.toFixed(2);
    }
}

var btnAdicionar = document.querySelector("#adicionar-paciente")
btnAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});


