//writing a function that tell about grades based on Scored Marks.

function getGrades(marks){
    if (marks >= 80){
        return ("Your Grade is A.");
    } 
    else if (marks < 80 && marks >= 70){
        return ("Your Grade is B.");   
        }
    else if (marks < 70 && marks >= 60){
        return ("Your Grade is C.");   
        }
    else if (marks < 60 && marks >= 50){
        return ("Your Grade is D.");
        }
    else{
        return ("You are fail!");  
        }
}

console.log(getGrades(40));
