const lista = [1,2,3,4,5,6,7,];

const novaLista = lista.map(function(item , index){
    return item + index;
});



const soma = lista.reduce(function(total, proximo){
    return total + proximo;
})

const find = lista.find(function(item){
    return item === 6;
})

console.log(find)