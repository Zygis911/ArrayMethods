// Easy

// 1. Task
/**
* Calculates the area of a rectangle.
* @param {number} length - The length of the rectangle.
* @param {number} width - The width of the rectangle.
* @returns {number} The area of the rectangle. before example: 2, 3 after example: 6
*/
// Hints to help solve the task:
// 1. The area of a rectangle is calculated by multiplying its length and width.
// 2. Create a function that takes the length and width as parameters.
// 3. Use the formula `area = length * width` to calculate the area.
// 4. Return the calculated area.

// 2. Task
/**
* Greets a person with a custom message.
* @param {string} [name="Guest"] - The name of the person to greet. Defaults to "Guest" if not provided.
* @param {string} [message="Welcome"] - The greeting message. Defaults to "Welcome" if not provided.
* @returns {string} The full greeting message. before example: "Welcome, Guest!" after example: Default: "Welcome, Guest!"
*/
// Hints to help solve the task:
// 1. Create a function that takes two optional parameters (name and message).
// 2. Use default values to handle cases where parameters are not provided.
// 3. Concatenate the name and message into a greeting string.
// 4. Return the full greeting message. Output: "Welcome, Guest!"

// 3. Task
/**
* Sums up a variable number of parameters.
* @param {...number} numbers - Any number of parameters to be summed.
* @returns {number} The sum of the provided numbers. before example: 1, 2, 3 after example: (1 + 2 + 3) = 6
*/
// Hints to help solve the task:
// 1. The goal is to create a function that sums up a variable number of parameters.
// 2. Use the rest parameter syntax (...) to capture the input numbers into an array.
// 3. Initialize a variable to store the sum (result = 0).
// 4. Use a for loop to iterate through the array of numbers.
// 5. Add each number to the sum variable in each iteration.
// 6. Return the final sum. Output: 6

// 4. Task
/**
 * Demonstrates array destructuring by assigning values from the array to variables.
 * @type {number[]} numbers - An array of numbers [1, 2, 3].
 * @type {number} a - The first element of the array.
 * @type {number} b - The second element of the array.
 * @type {number} c - The third element of the array.
 * @returns {number[]} The first three elements of the array. before example: [1, 2, 3] after example: destructuring syntax: [a, b, c] = numbers;
*/
// Hints to help solve the task:
// 1. Use array destructuring syntax to assign values from the array to variables.
// 2. Create a function that takes an array of numbers.
// 3. Destructure the array to extract the first three elements.
// 4. Return an array containing the extracted elements. Output: console.log(a, b, c); // 1, 2, 3

// 5. Task
/**
 * Combines two arrays using the spread operator.
 * @param {number[]} arr1 - The first array to combine.
 * @param {number[]} arr2 - The second array to combine.
 * @returns {number[]} The combined array. before example: [1, 2, 3] after example: spread syntax: [...arr1, ...arr2]
*/
// Hints to help solve the task:
// 1. Use the spread operator (...) to combine elements from two arrays.
// 2. Create a function that takes two arrays as parameters.
// 3. Use the spread operator to concatenate the elements of both arrays.
// 4. Return the combined array. Output: [1, 2, 3, 4, 5, 6]

// 6. Task
/**
 * Concatenates two arrays using the concat method.
 * @type {number[]} arr1 - The first array to concatenate.
 * @type {number[]} arr2 - The second array to concatenate.
 * @type {number[]} concatenatedArray - The concatenated array.
 * @returns {number[]} The concatenated array. before example: [1, 2, 3] after example: concat syntax: arr1.concat(arr2);
*/
// Hints to help solve the task:
// 1. Use the concat method to concatenate the two arrays.
// 2. The concat method does not modify the original arrays; instead, it returns a new array.
// 3. Return the concatenated array. Output: [1, 2, 3, 4, 5, 6]

// 7. Task
/**
* Adds an element to the end of an array.
* @param {string[]} arr - The array to which the element will be added.
* @param {string} element - The element to add to the array.
* @returns {number} The new length of the array. before example: ["apple", "banana"] after example: ["apple", "banana", "cherry"]
*/
// Hints to help solve the task:
// 1. Use the push method to add the element to the end of the array.
// 2. The push method modifies the original array and returns the new length of the array. Output: 3

// 8. Task
/**
* Removes the last element from an array using the pop method.
* @param {string[]} arr - The array from which the last element will be removed.
* @returns {string} The removed element. before example: ["apple", "banana", "cherry"] after example: ["apple", "banana"]
*/
// Hints to help solve the task:
// 1. Use the pop method to remove the last element from the array.
// 2. The pop method modifies the original array and returns the removed element. Output: "cherry"

// 9. Task
/**
* Adds an element to the beginning of an array.
* @param {string[]} arr - The array to which the element will be added.
* @param {string} element - The element to add to the array.
* @returns {number} The new length of the array. before example: ["apple", "banana", "cherry"] after example: ["orange", "apple", "banana", "cherry"] 
*/
// Hints to help solve the task:
// 1. Use the unshift method to add the element to the beginning of the array.
// 2. The unshift method modifies the original array and returns the new length of the array. Output: 4

// 10. Task
/**
* Removes the first element from an array using the shift method.
* @param {string[]} arr - The array from which the first element will be removed.
* @returns {string} The removed element. bofore example: ["apple", "banana", "cherry"] after example: ["banana", "cherry"]
*/
// Hints to help solve the task:
// 1. Use the shift method to remove the first element from the array.
// 2. The shift method modifies the original array and returns the removed element. Output: "apple"

// 11. Task
/**
* Uses the splice method to remove elements from the middle of an array.
* @param {number[]} arr - The array from which elements will be removed.
* @param {number} start - The index at which to start changing the array.
* @param {number} deleteCount - The number of elements to remove.
* @returns {number[]} The removed elements. before example: [1, 2, 3, 4, 5] after example: [1, 5]
*/
// Hints to help solve the task:
// 1. Use the splice method to remove elements from the array.
// 2. The splice method modifies the original array and returns the removed elements. Output: [2, 3, 4]

// 12. Task
/**
 * Logs each element of an array to the console using forEach method.
 * @param {number[]} numbers - The array of numbers to iterate over.
 * @returns {number[]} printed to console before example: [1, 2, 3] after example: 1, 2, 3
*/
// Hints to help solve the task:
// 1. Create a function that takes an array of numbers.
// 2. Use the forEach method to iterate over the array. forEach syntax: numbers.forEach((number)
// 3. Log each element to the console in each iteration. Output: 1, 2, 3

// 13. Task
/**
 * Doubles each element of an array using the map method.
 * @param {number[]} numbers - The array of numbers to double.
 * @returns {number[]} The array with each element doubled. before example: [1, 2, 3] after example: [2, 4, 6]
*/
// Hints to help solve the task:
// 1. Create a function that takes an array of numbers.
// 2. Use the map method to iterate over the array.
// 3. Double each element in each iteration.
// 4. Return the new array.

// 14. Task
/**
 * Logs a message to the console after a specified delay using setTimeout.
 * @param {string} message - The message to log after the delay.
 * @param {number} delay - The delay in milliseconds before logging the message.
 * @returns {number} printed to console after 1 second before example: "Hello, World!" after example: "Hello, World!"
*/
// Hints to help solve the task:
// 1. Use the setTimeout function to introduce a delay before executing a callback.
// 2. The setTimeout function takes a callback function and a delay in milliseconds.
// 3. The callback function will be executed after the specified delay.

// 15. Task
/**
 * Prints numbers from 1 to 5 with a 1-second delay between each number using setTimeout.
 * @returns {number[]} printed to console after 1 second before example: 1, 2, 3, 4, 5 after example: 1, 2, 3, 4, 5
*/
// Hints to help solve the task:
// 1. Use a loop to iterate from 1 to 5.
// 2. Inside the loop, use setTimeout to log each number after a delay.
// 3. Make use of the loop variable to capture the current number.
// 4. Ensure that the delay increases with each iteration. 

// 16. Task
/**
 * Squares each number in the array using map() method.
 * @param {number[]} numbers - The array of numbers to square.
 * @returns {number[]} The new array with squared values. before example: [1, 2, 3] after example: [1, 4, 9]
*/
// Hints to help solve the task:
// 1. Create a function that takes an array of numbers.
// 2. Use the map method to iterate over the array.
// 3. Square each element in each iteration. (2 * 2 = 4)
// 4. Return the new array. Output: [1, 4, 9]

// 17. Task
/**
 * Calculate the sum of an array of numbers using a callback function.
 *
 * @param {number[]} numbers - An array of numbers to sum.
 * @param {function} callback - A callback function to process the sum.
 * @returns {number} The result of the callback function.
 *
 * @example
 * // Define a callback function to calculate the square of the sum
 * function squareSum(sum) {
 *   return sum * sum;
 * }
 *
 * // Calculate the sum of [1, 2, 3] and then square the result
 * const result = calculateArraySum([1, 2, 3], squareSum);
 * console.log(result); // Output: 36
 */

// 18. Task
/**
 * Greets a friend with their name.
 *
 * @param {string} friendName - The name of the friend.
 * @returns {string} A greeting message.
 *
 * @example
 * // Greet a friend named "Test"
 * const greeting = greetFriend("Test");
 * console.log(greeting); // Output: "Hello, Test! How are you?"
 */

// 19. Task
/**
 * Multiplies two numbers.
 *
 * @param {number} num1 - The first number to be multiplied.
 * @param {number} num2 - The second number to be multiplied.
 * @returns {number} The product of num1 and num2.
 *
 * @example
 * // Multiply 3 by 5
 * const result = multiplyNumbers(3, 5);
 * console.log(result); // Output: 15
 */

// 20. Task
/**
 * Finds the maximum number from a list of numbers.
 *
 * @param {...number} numbers - The numbers to find the maximum from.
 * @returns {number} The maximum number from the provided list of numbers.
 *
 * @example
 * // Find the maximum from the numbers 5, 8, and 3
 * const maxNumber = findMaximum(5, 8, 3);
 * console.log(maxNumber); // Output: 8
 */

// 21. Task
/**
 * Find the length of a string.
 *
 * @param {string} inputString - The string for which to determine the length.
 * @returns {number} The length of the input string.
 *
 * @example
 * // Find the length of the string "Hello, World!"
 * const stringLength = findStringLength("Hello, World!");
 * console.log(stringLength); // Output: 13
 */

// 22. Task
/**
 * Concatenates two arrays using the spread operator.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} The concatenated array.
 *
 * @example
 * // Concatenate arrays [1, 2, 3] and [4, 5, 6]
 * const concatenatedArray = concatenateArrays([1, 2, 3], [4, 5, 6]);
 * console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]
 */

// 23. Task
/**
/**
 * Check if a number is even.
 *
 * @param {number} num - The number to check for evenness.
 * @returns {boolean} true if the number is even, false if it's odd.
 *
 * @example
 * // Check if the number 6 is even
 * const isEven = checkIfEven(6);
 * console.log(isEven); // Output: true
 */

// 24. Task
/**
 * Generate a random whole number between 1 and 100.
 *
 * @returns {number} A random whole number between 1 and 100.
 *
 * @example
 * // Generate a random whole number between 1 and 100
 * const randomNumber = generateRandomNumberInRange();
 * console.log(randomNumber);
 */

// 25. Task
/**
 * Converts an array of strings to uppercase.
 *
 * @param {string[]} array - The array of strings to convert.
 * @returns {string[]} The converted array of uppercase strings.
 *
 * @example
 * // Convert an array of strings to uppercase
 * const originalArray = ["apple", "banana", "cherry"];
 * const uppercaseArray = convertArrayToUppercase(originalArray);
 * console.log(uppercaseArray); // Output: ["APPLE", "BANANA", "CHERRY"]
 */

// Intermediate

// 1 Task
/**
 * Removes specified elements from an array and replaces them with new elements.
 * @param {string[]} arr - The array to modify.
 * @param {number} start - The index at which to start changing the array.
 * @param {number} deleteCount - The number of elements to remove.
 * @param {string[]} elementsToAdd - The elements to add in place of the removed elements.
 * @returns {string[]} The modified array. before example: ["apple", "banana", "cherry"] after example: ["apple", "kiwi", "orange", "cherry"]
*/
// Hints to help solve the task:
// 1. Use the splice method to remove elements from the array.
// 2. The splice method takes parameters for the start index, delete count, and elements to add.
// 3. Replace the specified elements with the new elements.
// 4. Return the modified array.