var nome = '';

if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt('Type your name!');
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;