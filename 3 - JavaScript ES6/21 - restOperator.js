// Rest Operator são os 3 pontinhos ...

function minhaLista(...numeros){

    console.log(numeros);

}

minhaLista(1,2,3,4,5);

/**
 * Outro Exemplo
 */

 function cadastrar(usuarios , ...novosusuarios){
    let totalusuarios = [
        ...usuarios,
        ...novosusuarios,
    ]

    return console.log(totalusuarios)
 }

 let usuarios = ['Leandro' , 'Pedro'];
 let novosusuarios = cadastrar(usuarios, 'Paulo' , 'Maria');

 