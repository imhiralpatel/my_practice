// For Loop

console.log("(1) For Loop : ");

for(let i=1; i<=5; i++)
{
    console.log("Welcome");
}

// While Loop

console.log("(2) While Loop : ");

let j =1;

while(j <=5)
{
    console.log(j);
    j++;
}


// do-While Loop

console.log("(3) do-While Loop : ");

let k =1;

do
{
    console.log(k);
    k++;
}
while(k <=5);


// for-of Loop

console.log("(4) for-of Loop : ");

let str = "Hiral";

for(let i of str)
{
    console.log(i); // is called iterator => charcater
}


// for-of Loop

console.log("(5) for-in Loop & string interpolation : ");

let student ={
    name : "RahulKumar",
    age : 36,
    cgpa : 6.65,
    isPass : true,
}; // is called object

for(let obj in student)
{
    let data = `Student Key is ${obj}. Student Value is ${student[obj]}`; // is called string interpolation
    console.log(data);
}

