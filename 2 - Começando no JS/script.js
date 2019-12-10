// Criando a Função Entrar

function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Type your name!');

    if(texto == '' || texto == null){
        alert('Digite seu nome novamente!');
        area.innerHTML = 'Bem Vindo ....';
    }else{
        area.innerHTML = 'Bem Vindo ' + texto;
    }

    
}

function entrar2(nome){
    var area = document.getElementById('area2');
    var texto = prompt('Type yout last name');
    area.innerHTML = nome + ' ' + texto;

}