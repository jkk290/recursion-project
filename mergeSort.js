
// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology. An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

// Tips:

//     Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).

function mergeSort(array){
    if (array.length === 1) {
        return array;
    } else {
        let midPoint = Math.floor(array.length / 2);
        let leftHalf = array.slice(0, midPoint);
        let rightHalf = array.slice(midPoint);

        let sortedLeft = mergeSort(leftHalf);
        let sortedRight = mergeSort(rightHalf);

        return merge(sortedLeft, sortedRight);
    }

}

function merge(sortedLeft, sortedRight) {
    let sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while ((leftIndex < sortedLeft.length) && (rightIndex < sortedRight.length)) {
        if (sortedLeft[leftIndex] < (sortedRight[rightIndex])) {
            sortedArray.push(sortedLeft[leftIndex]);
            leftIndex++;
        } else if (sortedLeft[leftIndex] > (sortedRight[rightIndex])) {
            sortedArray.push(sortedRight[rightIndex]);
            rightIndex++;
        } else if (sortedLeft[leftIndex] === (sortedRight[rightIndex])) {
            sortedArray.push(sortedLeft[leftIndex]);
            leftIndex++;
            sortedArray.push(sortedRight[rightIndex]);
            rightIndex++;
        }
    }

    
    if (leftIndex < sortedLeft.length) {
        sortedArray = sortedArray.concat(sortedLeft.slice(leftIndex));
    }
    if (rightIndex < sortedRight.length) {
        sortedArray = sortedArray.concat(sortedRight.slice(rightIndex));
    }

    return sortedArray;

};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

console.log(mergeSort([105, 79, 100, 110]))

console.log(mergeSort([1]))