function sumArrayElements(arr) {
    let sum = 0;
    arr.forEach((elements) => {
        sum += elements;
    })
    return sum;
}

const array1 = [1,2,3]
const result = sumArrayElements(array1)
console.log(result)
