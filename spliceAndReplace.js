function spliceAndReplace(arrayToUpdate, start, deleteCount, elementsToInsert) {
    arrayToUpdate.splice(start, deleteCount, ...elementsToInsert)
    return arrayToUpdate;
}

const array = [1,2,3,4,5];

const result = spliceAndReplace(array, 1, 2, [6,7]);

console.log(result)