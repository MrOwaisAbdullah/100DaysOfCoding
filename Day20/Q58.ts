function score (...scores) {
    return scores.reduce((a, b) => (a + b) / scores.length, 0);
}

console.log("Average Score is:", score(10, 20, 30, 40, 50));