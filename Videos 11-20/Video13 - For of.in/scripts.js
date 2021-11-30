let names = ['Paco', 'José', 'Paula', 'María']

for (let name of names){ //Para sacar el contenido del Array for of
    console.log(name);
}

for (let index in names){  //Para buscar índices for in
    console.log(index);
}

// let names = ['Paco', 'José', 'Paula', 'María']

// for (let i = 0; i < names.length; i++){
//     if(names[i]==='Paula'){
//         continue
//     }
//     console.log(names[i]);
// }

// for(let name of names){
//     if(name==='Paula'){
//         continue
//     }
//     console.log(name);
// }

// for(let index in names){
//     if(names[index]==='Paula'){
//         continue
//     }
//     console.log(index);
// }