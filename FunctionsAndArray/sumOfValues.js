function sumOfValues(...numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

let sum = sumOfValues(1,2,3)