//função com async - 
// async function saudacaoAsync(){
//     return "Hello, Welcome!!!!"
// }
// console.log(saudacaoAsync()); // console da função para exibir a estrutura
// saudacaoAsync().then(console.log); //console para exibir o resultado


//função assíncrona -  arrow function 
let hello = async () => {
    return "Hello, Welcome again!!!!"
};

// // await - 
// async function saudacaoAsync () {
//     return saudacao = await Promise.resolve("Hello, Welcome!!!!");
// }
// saudacaoAsync().then(console.log);


// function primeiraFuncao(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Esperou a promise ser executada');
//             resolve()
//         }, 5000);
//     })
// }

// async function segundaFuncao(){
//     console.log('Start');

//     await primeiraFuncao();

//     console.log('Finish');
// }

// segundaFuncao();