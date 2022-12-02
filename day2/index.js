const { readFileSync, promises: fsPromises } = require('fs');
const part1Dict = {
    'A X': 4,
    'A Y': 8,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 7,
    'C Y': 2,
    'C Z': 6,
};
const part2Dict = {
    'A X': 3,
    'A Y': 4,
    'A Z': 8,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 2,
    'C Y': 6,
    'C Z': 7,
};

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);

    return arr;
};

function calcPoints(arr, dict) {
    let temp = 0;
    for (i in arr) {
        temp += dict[arr[i]];
    };

    return temp
};

arr = syncReadFile('input.txt');

// part 1
console.log(calcPoints(arr, part1Dict))

// part 2
console.log(calcPoints(arr, part2Dict))