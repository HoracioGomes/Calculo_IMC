var btnAdicionar = document.querySelector("#buscar-pacientes")
btnAdicionar.addEventListener("click", function(){
var xhr = new XMLHttpRequest()
xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
xhr.addEventListener("load", function(){

    var spanErroReq = document.querySelector("#erro-requisicao")
    if(xhr.status==200){
        spanErroReq.classList.add("invisivel")
     var resposta = xhr.responseText
     //  console.log("Tipo: "+typeof resposta)
    //  console.log("Resposta antes: "+resposta)
     var pacientes = JSON.parse(resposta)
    //  console.log("Tipo: "+typeof pacientes)
    //  console.log("Resposta depois: "+pacientes)

  pacientes.forEach(paciente => {
      adcionaPacienteNaTabela(paciente)
  });
}else{
  spanErroReq.classList.remove("invisivel")
  console.log(xhr.status)  
  console.log(xhr.responseText)  
}
    })
    xhr.send()

})