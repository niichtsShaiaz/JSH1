const fetch = require("node-fetch");

let swappPromises = [];

for(let i = 1 ; i < 50; i++){

    const p = fetch("https://swapi.co/api/people/" +i)
    .then(res=>res.json())
    swappPromises.push(p);
}
Promise.all(swappPromises)
//.then(data => data.map(person => console.log(person.name)))
.then(all=>{
    const nameList = all.map(person => person.name);
    console.log(nameList);
})