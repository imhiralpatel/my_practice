
console.log(" ====== (1) Normal Function : ======");

function countVowels(str)
{
    let count=0;

    for(const char of str)
    {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }

    console.log("Normal Function Total Vowel : ", count);
}

// Arrow Function
console.log(" ======2) Arrow Function : ======");

const totalVowels = (str) =>
{
    let count=0;

    for(const char of str)
    {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }

    console.log("Arrow Function Total Vowel : ", count);
}

console.log(" ======3) Map Function : ======");

let arr = [1,2,3,4,5,6,7];

let mapArray = arr.map((val) => {
 return val * 2;
});

console.log("Before Map Function : ", arr);

console.log("After Map Function : ", mapArray);

console.log(" ======4) Filter Function : ======");

let fillArray = arr.filter((val) => {
 return val % 2 === 0;
});

console.log("Before filter Function : ", arr);

console.log("After filter Function : ", fillArray);



console.log(" ====== 5) Reduce Function : ======");

let n = prompt("Enter a number :");

let rarr = [];

for(let i=0; i < n; i++)
{
    rarr[i] = i;
}

console.log("Before Reduce Array :", arr);

let sum = rarr.reduce((prev, curr) => {
    return prev + curr;
});

console.log("After sum Reduce Array :", sum);

let factorial = rarr.reduce((prev, curr) => {
    return prev * curr;
});

console.log("After factorial Reduce Array :", factorial);

