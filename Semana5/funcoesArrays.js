// //ForEach - Executa uma função em cada elemento do array.
// const daysOfTheWeek = ['Segunda-feira', 'Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira', 'Sábado', 'Domingo'];
// daysOfTheWeek.forEach(element=> console.log("Days of the week: ", element));

// //Map - Executa uma função e manda um novo conjunto de dados.
// const numbers = [1,3,6,9,12,15,18,21,24,27,30];
// const newNumbers = numbers.map(element => element *3);
// console.log("New numbers: ", newNumbers);


// //Filter - Filtra ou remove elementos de dentro do Array.
// //filtra
// const trees = ['Ipê', 'Pinheiro', 'Castanheira', 'Jatobá', 'Juazeiro', 'Pinus'];
// const result = trees.filter(words =>words.length >6);
// console.log("Result:", result);

// //Filter - Filtra ou remove elementos de dentro do Array.
// //remove
// const repeatedData = [12,15,181,3,6,9,12,15,18,21,24,27,30];
// const newArray = repeatedData.filter((element,index, arr) => arr.indexOf(element) === index);
// console.log("New Array: ", newArray);


// //Find - Retorna o valor do primeiro elemento do array que satisfizer a função.
// const flowers = ['Rosa', 'Orquídea', 'Margarida', 'Girassol', 'Lírio', "Gadênia"];
// const findFlowers= flowers.find(p=> p.startsWith('g'));
// console.log("Flower: ", findFlowers);


// //Reduce - Retorna o valor resultante, único, final.
// const championWorldCups = [
//     { country: 'Brasil', champion: 5 },
//     { country: 'Alemanha', champion: 4 },
//     { country: 'Italia', champion: 4 },
//     { country: 'Argentina', champion: 2},
//     { country: 'Uruguai', champion: 2 },
//     { country: 'Espanha', champion: 2 },
//     { country: 'Inglaterra', champion: 2 }
// ]
// const totalWorldCups = championWorldCups.reduce((prevValor, elem) => prevValor + elem.champion, 0);
// console.log("Total World Cups: ", totalWorldCups);




