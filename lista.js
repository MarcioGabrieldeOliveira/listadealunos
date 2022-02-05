let numeroAlunos = 5;

let listaAlunos = ["Mariana", "Frederico", "Victor", "Ismael", "Pablo", "Erick"];

// for(let contador = 0; contador < listaAlunos.length/*numeroAlunos*/; contador++) {
//     // console.log(contador)

//     if(contador == 0) {
//         console.log(contador + ": ZERO"); // Concatenação
//     } else if (contador % 2 == 1 /*ou % 2 != 0*/) {
//         console.log(`${contador}: ÍMPAR`); // Interpolação - Template Strings
//     } else {
//         console.log(`${contador}: PAR`)
//     }      
// }

let contador = 0;

while (contador < listaAlunos.length) {
    
    if (contador == 0) {
        console.log(contador + ": ZERO: " + listaAlunos[contador]); // Concatenação
    } else if (contador % 2 == 1/*ou %2 != 0*/) {
        console.log(`${contador}: ÍMPAR: ${listaAlunos[contador]}`); // Interpolação - Template Strings
    } else {
        console.log(`${contador}: PAR: ${listaAlunos[contador]}`)
    }

    contador++;
}