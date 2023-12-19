function appendArray(stringArray, numberArray) {
    stringArray.push(...numberArray)
    return stringArray;
}


const array2 = ['a', 'b', 'c'];

const numberArray = [1,2,3];

const result = appendArray(array2, numberArray);

console.log(result)