//writing a function to check the year is a leap year on not.
 
function getLeapYear(year: number){
        if (((year % 4) == 0 && (year % 100)!= 0) || (year % 400 == 0)){
            console.log("This Year is a Leap Year.");}
        else
            {console.log("This Year is not a Leap Year");
            }
}

getLeapYear(2024);