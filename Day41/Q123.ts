//creating a function that iterates through a string and stops when it finds the first vowel.
function getFirstVowel(str: string){
    const vowels = "aeiou";
    for(let char of str){
        if (vowels.includes(char.toLowerCase())){
            console.log(`First vowel found: ${char}`);
            break;
        }
    }
}

getFirstVowel("My nAme iS Owais.")