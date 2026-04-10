// Array

console.log("Array For Loop : ");

let heroes = ["Ironman", "Thor", "Hulk", "Spider-Man"];

for(let item of heroes)
{
    console.log(item);
}


// Array number change after 10% discount.

let price = [250, 399, 899, 699, 500];

console.log("Before Array :", price);

for(let i=1; i<=price.length; i++)
{
    let offer = price[i] /10;
    price[i] -= offer;
}

console.log("After Array :", price);


heroes.push("Captain-America", "Loki");

console.log("After push() array Method : ", heroes);

heroes.pop();

console.log("After pop() array Method : ", heroes);

heroes.unshift("Venom", "Doctor-strange");

console.log("After unshift() array Method : ", heroes);

heroes.shift();

console.log("After shift() array Method : ", heroes);

let dcHeroes = ["Aquman", "SuperMan", "Batman"];

let allHeroes = heroes.concat(dcHeroes);

console.log("After shift() array Method : ", allHeroes);

allHeroes.slice(1, 7);

console.log("After slice() array Method : ", allHeroes);