// closure practice

function createGame(){

    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    // return an object reference to these methods
    return {increaseScore, decreaseScore, getScore}
}

// create a 'createGame' object
let game = createGame();

game.increaseScore(3);
game.increaseScore(5);
game.decreaseScore(2);

// score is private and cannot be modified without a setter, this score is unrelated to the score within createGame object
game.score = 1000;
console.log(game);

console.log(`The final score is ${game.getScore()}pts`); // 6
