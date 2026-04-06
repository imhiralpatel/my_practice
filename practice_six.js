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