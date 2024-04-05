//creating a function that tells next birthday date.

function birthdayMonth(birthMonth: number, birthDay: number){
    let currentDate = new Date;
    let currentYear = currentDate.getFullYear();

    let nextBirthYear = currentYear;
    if (currentDate.getMonth() > (birthMonth - 1) || (currentDate.getMonth() === (birthMonth -1) && currentDate.getDay() >= birthDay)){
        nextBirthYear++;
    }
    let nextBirthday = new Date(nextBirthYear, birthMonth -1, birthDay);
    console.log(`Your next birthday is on: ${nextBirthday.toLocaleDateString()}`);
     
}

birthdayMonth(2, 20);
