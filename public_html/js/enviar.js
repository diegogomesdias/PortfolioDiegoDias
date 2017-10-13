function enviarAlerta(){
    var nome = document.getElementById("exampleInputName");
    var email = document.getElementById("exampleInputEmail1");

    if(nome.value != ""){
        alert('Obrigado Sr(a)'+nome.value+', retornarei o mais breve possivel' )
    }
}
