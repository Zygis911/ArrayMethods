function removeLastElement(array) {
    array.pop();
    return array;
}


const poppedArray = [1,2,3,4];

const result = removeLastElement(poppedArray);

console.log(result)