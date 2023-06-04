//promisses - São como promessas da vida real, esperando algum retorno;
//fetch- O fetch é um método que faz uma requisição HTTP através dos dados da URL.

async function getPeople(){
    try {
        const people = await fetch('http://randomuser.me/api/?results=15');
        return people.json();
    } catch (error){
        console.log(`error:${error}`);
    }
}

getPeople().then(data =>console.log(data)); //obter dados do servidor


//buscar somente mulheres
getPeople().then( data => {
    const woman = data.results
    console.log(woman.filter(m => m.gender === 'female'));
})

//buscar pelo title no nome
getPeople().then( data => {
    const name = data.results
    console.log(name.find(n => n.name.title === 'Miss'));
})    

//buscar por menor idade
getPeople().then( data => {
    const underAge = data.results
    console.log(underAge.every(i => i.dob.age = 18));
})






