// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the Fibonacci sequence. Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].

function fibs(n) {
    let fibArray = [];
    let num1 = 0;
    let num2 = 1;
    let num3 = undefined;
    fibArray.push(num1);
    fibArray.push(num2);

    while (fibArray.length < n) {
        num3 = num1 + num2;
        fibArray.push(num3);
        num1 = num2;
        num2 = num3;
    }

    return fibArray;
};






// Now write another function fibsRec which solves the same problem recursively.

// function fibsRec(n, array) {
//     if (n < 2 ) {
//         return 1;
//     }



// }

console.log(fibs(8));