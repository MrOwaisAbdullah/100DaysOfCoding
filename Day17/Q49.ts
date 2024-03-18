function hobbies(...resthobbies: string[]){
    resthobbies.forEach(hobby=> console.log(`I really enjoy ${hobby}.`));   
}

hobbies("Sports", "Cooking", "Reading", "DIY Projects", "Gardening");