function buscarCep(){
    //pegar um dado digitado no campo cep no formulário
    var cep = document.getElementById("cep").value ;
    //pegar o endereço no site viacep (api)
    var url = "http://viacep.com.br/ws/"+ cep + "/json/" ;
    //objeto para criar uma comunicação do ajax
    var obj = new XMLHttpRequest() ;
    //Abrir um protocolo para buscar os dados
    obj.open('GET', url , true) ;
    //Metodo para trazer os dados
    obj.onreadystatechange = function () {


        if ( obj.readyState == 4 && obj.status == 200){
            //Mostrar várias informações no objeto
            console.log(obj);
            //Mostrar somente texto em formato JSON
            console.log(obj.reponseText);
            //Para converter de JSON - Objeto do Js
            var dados = JSON.parse(obj.responseText);
            console.log(dados);
            //Colocando os dados buscados nos campos do formulário
            document.getElementById("rua").value= dados.logradouro ;
            document.getElementById("bairro").value= dados.bairro ;
            document.getElementById("cidade").value= dados.localidade ;
            document.getElementById("estado").value= dados.uf ;
            document.getElementById("regiao").value= dados.regiao ;
        }
        
    }
    //Enviar solicitção
    obj.send();
}
