//creating a function that checks to strings are same or not ignoring case sensitivity.

function compareStrings(str1: string, str2: string){
    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();

    if (lowerStr1 === lowerStr2){
        console.log("Both Strings are Same.");
    }
    else{
        console.log("Both Strings are Different from each other.");
        
    }
}

let string1 = "My Name is Owais."
let string2 = "My Father Name is Abdullah."
let string3 = "My NAME is owais."

compareStrings(string1, string3);