// closure practice

let score = 0;

function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
}

function decreaseScore(points) {
    score -= points;
    console.log(`-${points}`);
}

function getScore() {
    return score;
}

increaseScore(5);
increaseScore(6);
decreaseScore(3);
console.log(`The final score is ${getScore()}pts`);
