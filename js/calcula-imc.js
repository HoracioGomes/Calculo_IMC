
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
    var imc = calculaImc(peso,altura)

    //Validacao basica com operadores logicos        
    var pesoEValido = validaPeso(peso);
    var alturaEValida = validaAltura(altura)
    var tdImc = paciente.querySelector(".info-imc");

    if (!pesoEValido) {
            
        tdImc.textContent = "Peso Inválido";
        //paciente.style.backgroundColor="lightCoral"
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaEValida) {
        alturaEValida = false;
        tdImc.textContent = "Altura Inválida";
        //paciente.style.backgroundColor="lightCoral"
        paciente.classList.add("paciente-invalido")

    }
        //toFixed(): Limita casas decimais
    if (alturaEValida && pesoEValido) {
        tdImc.textContent = imc;
    }

function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true
    }else{
        return false
    }
}

function validaAltura(altura){

    if(altura > 0 && altura <= 3.00){
        return true
    }else{
        return false
    }
}

    function calculaImc(peso,altura){
        var imc = 0
        imc = peso / (altura*altura)
        return imc.toFixed(2)
    }
}




