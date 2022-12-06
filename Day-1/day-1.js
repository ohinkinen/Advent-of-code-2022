/*
Part one:

The task for the part one of day 1 is to find the elf that is
carrying the most calories. The data is listed in the "input.txt".
*/

const fs = require('fs');

let data = fs.readFileSync("input.txt").toString().split("\n\n")

let elfs = [];

data.forEach(elf => {
    elfs.push(elf.split("\n"));
});

let most_calories = 0;

elfs.forEach(elf => {
    let sum = elf.reduce((a, b) => parseInt(a) + parseInt(b), 0);

    if (sum > most_calories) most_calories = sum;
})

console.log(most_calories);

/*
Part two:

The task for the part two of day 1 is to find the three elfs that
are carrying the most calories and the total amount of calories
that they are carrying.
*/

let top_three_calories = [0, 0, 0];

elfs.forEach(elf => {
    let sum = elf.reduce((a, b) => parseInt(a) + parseInt(b), 0);

    switch (true) {
        case (top_three_calories[0] < sum):
            top_three_calories.unshift(sum);
            top_three_calories.pop();
            break;

        case (top_three_calories[1] < sum):
            top_three_calories.splice(1, 0, sum);
            top_three_calories.pop();
            break;

        case (top_three_calories[2] < sum):
            top_three_calories.splice(2, 0, sum);
            top_three_calories.pop();
            break;
    }
})

console.log(top_three_calories.reduce((a, b) => a + b, 0));