var lista = ['Leandro' , 'Mateus' , 'Lucas' , 'Caio' , 15]; 
console.log(lista.indexOf('Mateus')); // posição 1
console.log(lista.indexOf('LeandroX')); // devolveu -1 , quer dizer que não existe
console.log(lista.join(' , ')) ; // separar e juntar com virgula
console.log(lista.pop(15));
console.log(lista);
console.log(lista.shift());
console.log(lista);

if(lista.indexOf('Lucas') > -1){
    console.log('O nome consta na lista')
}else{
    console.log('Nome não localizado')
}