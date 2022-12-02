const { readFileSync, promises: fsPromises } = require('fs');

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);

    return arr;
}

function calCalc(arr) {
    let temp = 0;
    let output = [];
    for (i in arr) {
        if (arr[i] !== '') {
            temp += Number(arr[i]);
        }
        else {
            output.push(temp)
            temp = 0
        }
    }

    return output;
}

function findLargest(arr) {
    let temp = 0;
    for (i in arr) {
        if (temp < arr[i]) {
            temp = arr[i]
        }
    }

    return temp;
}

function top3(arr) {
    arr = arr.sort()

    let len = arr.length;
    let temp = 0;

    temp += arr[len - 1];
    temp += arr[len - 2];
    temp += arr[len - 3];

    return temp
}

let arr = calCalc(syncReadFile('./input.txt'))

// part 1
console.log(findLargest(arr));

// part 2
console.log(top3(arr))




