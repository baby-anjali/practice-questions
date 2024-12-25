const add = (number1, number2) => number1 + number2;

const sumOf = numbers => numbers.reduce(add, 0);

const multiply = (number1, number2) => number1 * number2;

const productOf = numbers => numbers.reduce(multiply, 1);

const averageOf = numbers => numbers.reduce(add, 0) / numbers.length;

const minimum = (number1, number2) => number1 < number2 ? number1 : number2;

const minOf = numbers => numbers.reduce(minimum, Infinity);

const maximum = (number1, number2) => number1 > number2 ? number1 : number2;

const maxOf = numbers => numbers.reduce(maximum, -Infinity);

const sumPositiveNumbers = function numbers {
  return numbers.filter(number => number > 0).reduce(add, 0);
};

const square = number => number * number;

const sumOfSquares = numbers => numbers.map(square).reduce(add, 0);

const isOdd = number => number % 2 !== 0;

const sumOfOddNumbers = numbers => numbers.filter(isOdd).reduce(add, 0);

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegative = (count, number) => {
  if (isNegative(number)) count++;
  return count;
};

const countNegativeNumbers = numbers => numbers.reduce(countNegative, 0);

// // findSumOfEvenSquares([1, 2, 3, 4]) => 20
// const findSumOfEvenSquares = function (numbers) { };

// // concatenateWords(["hello", "world"]) => "helloworld"
// const concatenateWords = function (words) { };

// // longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
// const longestWord = function (words) { };

// // shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
// const shortestWord = function (words) { };

// // joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
// const joinWithComma = function (words) { };

// // reverseWords(["hello", "world"]) => "world hello"
// const reverseWords = function (words) { };

// // joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
// const joinWordsWithSpace = function (words) { };

// // concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
// const concatenateNames = function (names) { };

// // countVowelsInWords(["hello", "world"]) => "eoo"
// const countVowelsInWords = function (words) { };

// // makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
// const makeCamelCase = function (words) { };

// // reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
// const reverseString = function (words) { };

// // duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
// const duplicateNumbers = function (numbers) { };

// // concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
// const concatenateArrays = function (arrays) { };

// // flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
// const flattenArray = function (arrays) { };

// // uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
// const uniqueNumbers = function (numbers) { };

// // groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
// const groupByLength = function (strings) { };

// // countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
// const countOccurrences = function (strings) { };

// // mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
// const mergeObjects = function (objects) { };

// // zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
// const zip = function (keys, values) { };

// // makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
// const makeObject = function (keys, values) { };

// // invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
// const invertObject = function (obj) { };

// // mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
// const mergeArrays = function (arr1, arr2) { };

// // groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
// const groupByProperty = function (objects) { };

// // ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
// const ascendingGroups = function (numbers) { };

// // flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
// const flattenToObject = function (pairs) { };

// // longestString(["apple", "banana", "cherry", "dates"]) => "banana"
// const longestString = function (strings) { };

// // mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
// const mergeIntervals = function (intervals) { };

// // sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
// const sumAndCount = function (numbers) { };

// // deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
// const deepFlatten = function (arr) { };

// // findMax([1, 2, 3, 4, 5]) => 5
// const findMax = function (numbers) { };

// // cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
// const cumulativeSum = function (numbers) { };

// // equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
// const equalChunksOfAtLeast = function (numbers) { };

// // groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
// const groupByType = function (array) { };

// // runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
// const runningAverages = function (numbers) { };

// // flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
// const flattenObject = function (obj) { };

// // splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
// const splitIntoSubarrays = function (arr, size) { };

// // groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
// const groupByFirstLetter = function (words) { };

// // findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
// const findFirstNonRepeated = function (numbers) { };

// // countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
// const countVowels = function (words) { };

// // mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
// const mergeConsecutiveDuplicates = function (array) { };

// // longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
// const longestConsecutiveSubsequence = function (numbers) { };

// // topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
// const topKFrequent = function (numbers, k) { };

// // nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
// const nestedAverage = function (nestedNumbers) { };

// // cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
// const cartesianProduct = function (arr1, arr2) { };

// // groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
// const groupByDate = function (records) { };

// // findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
// const findMinMax = function (numbers) { };

// // sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
// const sumByCategory = function (items) { };

const areElementsEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
};

const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
};

const areObjectsEqual = function (actual, expected) {
  const keys1 = Object.keys(actual);
  const keys2 = Object.keys(expected);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!areEqual(actual[key], expected[key])) return false;
  }

  return true;
};

const areEqual = function (actual, expected) {
  if (typeof actual === 'object' && typeof expected === 'object') {
    return areObjectsEqual(actual, expected);
  }

  if (Array.isArray(actual) && Array.isArray(expected)) {
    return areArraysEqual(actual, expected);
  }

  return actual === expected;
};

const testEach = function (failed, [funcName, inputs, expected]) {

  const actual = funcName(inputs);

  if (!areEqual(actual, expected)) {
    failed.push([funcName, inputs, expected, actual]);
  }

  return failed;
};

const testAll = function (testCases) {
  const failed = testCases.reduce(testEach, []);

  const percent = (testCases.length - failed.length) / testCases.length * 100;
  console.log(Math.floor(percent), "% passing!");

  console.table(failed);
};

const testCasesForProduct = [
  [productOf, [1, 2, 3], 6],
  [productOf, [0, 9, 10], 0]
];

const testCasesForSumOF = [
  [sumOf, ([1, 2, 3, 4]), 10],
  [sumOf, ([1, 2, -2, 4]), 5],
  [sumOf, ([1]), 1],
  [sumOf, ([]), 0]
];

const testCases = [
  ...testCasesForSumOF, ...testCasesForProduct
];

testAll(testCases);