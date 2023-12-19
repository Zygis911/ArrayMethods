function squareArrayElements(arr) {
    const squaredArray = [];
    arr.forEach((element) => {
        squaredArray.push(element * element)
    })
    return squaredArray;
}

const array = [1,2,3,4,5];

const result = squareArrayElements(array);

console.log(result)