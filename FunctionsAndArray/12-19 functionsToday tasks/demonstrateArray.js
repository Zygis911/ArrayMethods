function destructureArray(numbers) {
    const [a, b, c] = numbers;
    return [a, b, c]

}
const numbersArray = [1,2,3];

const result = destructureArray(numbersArray)

console.log(result)