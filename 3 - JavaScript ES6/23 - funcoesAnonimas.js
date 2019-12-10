// Funções Anônimas

function adicionar (...numeros){

    let total = numeros.reduce(function(total, proximo){
        return total + proximo
    })

    console.log(total);

}

adicionar(1,2,3,4,5,6);

// Função Anônima mais reduzida com arrow function

function adicionar (...numeros){

    let total = numeros.reduce((total, proximo) => total + proximo);

    console.log(total);

}

adicionar(1,2,3,4,5,6);