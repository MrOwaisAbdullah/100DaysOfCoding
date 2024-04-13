//creating a function that tells about persons age group.
function getAgeGroup(age){
    if (age < 13){
        return "The Person is a Child."
    }
    else if(age >= 13 && age <= 19){
        return "The Person is a Teenager."
    }
    else{
        return "The Person is an Adult."
    }
}

console.log(getAgeGroup(23));