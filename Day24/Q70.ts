//creating a function that prints number 1-5 using let keyword

let print1_5 = function(){
    for (let i = 1; i < 6; i++) {
        console.log(i);
    }
}

print1_5();

//The let keyword restricts the visibility of the loop, preventing it from being accessed outside of the loop.