//Mutator Methods (These methods modify the original array):
/*
 - push(): Adds one or more elements to the end of an array.
 - pop(): Removes the last element from an array.
 - shift(): Removes the first element from an array.
 - unshift(): Adds one or more elements to the beginning of an array.
 - splice(start, deleteCount, ...items): Adds/removes elements from an array.
 - reverse(): Reverses the order of the elements in an array.
 - sort(compareFunction): Sorts the elements of an array.
 - copyWithin(target, start, end): Copies a sequence of elements within the array to a new position within the same array.
 - fill(value, start, end): Fills elements of an array with a static value from a start index to an end index.

*/ 

// let arr = [1, 2, 3];
// arr.push(4); // [1, 2, 3, 4]

// let arr = [1, 2, 3];
// arr.pop(); // [1, 2], returns 3

// let arr = [1, 2, 3];
// arr.shift(); // [2, 3], returns 1

// let arr = [1, 2, 3];
// arr.unshift(0); // [0, 1, 2, 3]

// let arr = [1, 2, 3, 4];
// arr.splice(1, 2, 'a', 'b'); // [1, 'a', 'b', 4], returns [2, 3]

// let arr = [1, 2, 3];
// arr.reverse(); // [3, 2, 1]

// let arr = [3, 1, 2];
// arr.sort(); // [1, 2, 3]

// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 3); // Copying elements starting from index 3 to the beginning
// console.log(arr); // [4, 5, 3, 4, 5]

// let arr = [1, 2, 3, 4];
// arr.fill(0, 2, 4); // [1, 2, 0, 0]


//2. Accessor Methods (These methods do not modify the original array but return a new value based on it.)
/*
 - concat(): Merges two or more arrays.
 - slice(start, end): Returns a shallow copy of a portion of an array.
 - includes(element, fromIndex): Determines whether an array includes a certain element.
 - indexOf(element, fromIndex): Returns the first index at which a given element can be found.
 - lastIndexOf(element, fromIndex): Returns the last index at which a given element can be found.
 - join(separator): Joins all elements of an array into a string.
 - toString(): Converts an array to a string.
 - toLocaleString(): Converts an array to a locale-specific string.
 - find(callback, thisArg): Returns the first element in the array that satisfies the provided testing function.
 - findIndex(callback, thisArg): Returns the index of the first element that satisfies the provided testing function.
 - flat(depth): Flattens a nested array up to the specified depth.
 - flatMap(callback, thisArg): Maps each element using a mapping function, then flattens the result into a new array.
 - at(index): Returns the element at the given index (supports negative indexing).
*/

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let result = arr1.concat(arr2); // [1, 2, 3, 4]

// let arr = [1, 2, 3, 4]; // n-1
// let result = arr.slice(1, 3); // [2, 3]

// let arr = [1, 2, 3];
// let result = arr.includes(2); // true

// let arr = [1, 2, 3];
// let result = arr.indexOf(2); // 1

// let arr = [1, 2, 3, 2];
// let result = arr.lastIndexOf(2); // 3

// let arr = [1, 2, 3];
// let result = arr.join('-'); // "1-2-3"

// let arr = [1, 2, 3];
// let result = arr.toString(); // "1,2,3"

// let arr = [1, new Date()];
// let result = arr.toLocaleString(); // "1, 7/5/2023, 12:00:00 AM"

// let arr = [1, 2, 3, 4];
// let result = arr.find(num => num > 2); // 3

// let arr = [1, 2, 3, 4];
// let result = arr.findIndex(num => num > 2); // 2 

// let arr = [1, [2, 3], [4, [5]]];
// let result = arr.flat(2); // [1, 2, 3, 4, 5]

// let arr = [1, 2, 3];
// let result = arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]

// let arr = [1, 2, 3, 4];
// let result = arr.at(-1); // 4

//3.Iteration Methods: These methods help iterate over the elements of an array.
/*
- forEach(callback, thisArg): Executes a provided function once for each array element.
- map(callback, thisArg): Creates a new array populated with the results of calling a provided function on every element in the array.
- filter(callback, thisArg): Creates a new array with all elements that pass the test implemented by the provided function.
- reduce(callback, initialValue): Executes a reducer function on each element of the array, resulting in a single output value.
- reduceRight(callback, initialValue): Same as reduce() but operates from right to left.
- some(callback, thisArg): Tests whether at least one element in the array passes the test implemented by the provided function.
- every(callback, thisArg): Tests whether all elements in the array pass the test implemented by the provided function.
*/

// let arr = [1, 2, 3];
// arr.forEach(num => console.log(num)); // Logs 1, 2, 3

// let arr = [1, 2, 3];
// let result = arr.map(num => num * 2); // [2, 4, 6]

// let arr = [1, 2, 3, 4];
// let result = arr.filter(num => num > 2); // [3, 4]

// let arr = [1, 2, 3, 4];
// let result = arr.reduce((sum, num) => sum + num, 0); // 10

// let arr = ['a', 'b', 'c'];
// let result = arr.reduceRight((acc, letter) => acc + letter, ''); // "cba"

// let arr = [1, 2, 3];
// let result = arr.some(num => num > 2); // true

// let arr = [1, 2, 3];
// let result = arr.every(num => num > 0); // true


//. Array Properties:
//length: Returns the number of elements in an array.

// let arr = [1, 2, 3];
// let length = arr.length; // 3

// Static Methods:These methods are called on the Array class itself, not on instances.
/*
- Array.from(): Creates a new, shallow-copied array instance from an array-like or iterable object.
- Array.isArray(): Checks if a value is an array.
- Array.of(): Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
*/

// let str = 'hello';
// let arr = Array.from(str); // ['h', 'e', 'l', 'l', 'o']

// let arr = [1, 2, 3];
// let isArray = Array.isArray(arr); // true

// let arr = Array.of(1, 2, 3); // [1, 2, 3]