/*
Part one:

The task for the part one of day 2 is to calculate your total score
in a rock-paper-scissors tournament if you would be using a given
strategy guide. First column (A, B or C) opponents shape and your
guess is that the second column (X, Y or Z) tells what shape you
should pick. The data is in input.txt file.
*/

const fs = require('fs');

let games = fs.readFileSync('input.txt').toString().split('\n');

let points = {
    /*
    A and X: rock, B and Y: paper, C and Z: scissors
    You get 1 point for choosing rock, 2 points for choosing paper
    and 3 points for choosing scissors.
    You also get 0 points for losing, 3 points for drawing and 6
    points for winning.
    */
    AX: 4,
    BX: 1,
    CX: 7,
    AY: 8,
    BY: 5,
    CY: 2,
    AZ: 3,
    BZ: 9,
    CZ: 6
}

let total_points = 0;

games.forEach(game => {
    if (!game) return;
    total_points += points[game.replace(/\s+/g, '')];
})

console.log(total_points);

/*
Part two:

Task for the part two of day 2 is to calculate the total score you
would get by using the strategy guide, but now you have been told
that the second column (X, Y or Z) tells you if you should lose,
draw or win. 
*/

points = {
    /*
    A: rock, B: paper, C: scissors
    X: lose, Y: draw, Z: win
    You get 1 point for choosing rock, 2 points for choosing paper
    and 3 points for choosing scissors.
    You also get 0 points for losing, 3 points for drawing and 6
    points for winning.
    */
    AX: 3,
    BX: 1,
    CX: 2,
    AY: 4,
    BY: 5,
    CY: 6,
    AZ: 8,
    BZ: 9,
    CZ: 7
}

total_points = 0;

games.forEach(game => {
    if (!game) return;
    total_points += points[game.replace(/\s+/g, '')];
})

console.log(total_points);