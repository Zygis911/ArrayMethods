function pushElemenToArray(array,element) {
    array.push(element)
    return array.length
}

const myArray = [1,2,3]

pushElemenToArray(myArray, 4)

console.log(myArray)