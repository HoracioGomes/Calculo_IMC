var btnAdicionar = document.querySelector("#adicionar-paciente")
btnAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obterPacienteDoFormulario(form)
    
if(validaPaciente(paciente).length>0){
    var erros = validaPaciente(paciente)
    exibeMensagemDeErro(erros)
    return
}
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(montaTrPaciente(paciente));
    form.reset()
    var ul = document.querySelector(".mensagens-erro")
    ul.innerHTML = ""

});

function obterPacienteDoFormulario(form){
var paciente = {
    nome : form.nome.value,
    peso : form.peso.value,
    altura : form.altura.value,
    gordura : form.gordura.value,
    imc : calculaImc(form.peso.value,form.altura.value)
 
}
return paciente

}

function montaTrPaciente(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")
    pacienteTr.appendChild(montaTdPaciente(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTdPaciente(paciente.peso, "info-peso"));
    pacienteTr.appendChild( montaTdPaciente(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTdPaciente(paciente.gordura, "info-gorduraTd"));
    pacienteTr.appendChild(montaTdPaciente(paciente.imc, "info-imc"));
console.log(pacienteTr)
    return pacienteTr
}

function montaTdPaciente(dado,classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function validaPaciente(paciente){
    var erros = []
    if(paciente.altura!=""){
    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida!")
    }}else{
        erros.push("Preencha o campo altura!")
    }
if(paciente.peso!=""){
    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido!")
    }}else{
        erros.push("Preencha o campo peso!")
    }

    if(paciente.nome.length==0){
        erros.push("Preencha o campo nome!")
    }

    if(paciente.gordura.length==0){
        erros.push("Preencha o campo gordura!")
    }
    return erros
}

function exibeMensagemDeErro(erros){
var ul = document.querySelector(".mensagens-erro")
ul.innerHTML = ""
erros.forEach(function(erro) {
    var li = document.createElement("li")
    li.textContent = erro
    ul.appendChild(li)
});
}