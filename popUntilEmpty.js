function popUntilEmpty() {
    const newArray = [1,2,3]
    while (newArray.length > 0) {
        newArray.pop();
    }
    return newArray;
}

const result = popUntilEmpty();

console.log(result)