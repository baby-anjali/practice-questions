const vowels = 'aeiou';

const square = function (number) {
  return number * number;
};

const squaresOf = function (numbers) {
  return numbers.map(square);
};

const lengths = function (string) {
  return string.length;
};

const lengthsOf = function (strings) {
  return strings.map(lengths);
};

const capitalise = function (string) {
  return string.toUpperCase();
};

const uppercaseOf = function (strings) {
  return strings.map(capitalise);
};

const firstCharacter = function (string) {
  return string === '' ? '' : string[0];
};

const firstCharactersOf = function (strings) {
  return strings.map(firstCharacter);
};

const truthValue = function (number) {
  return number !== 0;
};

const truthValuesOf = function (numbers) {
  return numbers.map(truthValue);
};

const reverseString = function (string) {
  return [...string].reverse().join('');
};

const reversedStringsOf = function (strings) {
  return strings.map(reverseString);
};

const double = function (value) {
  return value.repeat(2);
};

const doubleLetters = function (string) {
  return [...string].map(double).join('');
};

const doubleLettersOf = function (strings) {
  return strings.map(doubleLetters);
};

const negateBoolean = function (boolean) {
  return !boolean;
};

const negatedBooleansOf = function (booleans) {
  return booleans.map(negateBoolean);
};

const charCodes = function (letter) {
  return letter.charCodeAt(0);
};

const charCodesOf = function (strings) {
  return strings.map(charCodes);
};

const domains = function (email) {
  const domainIndex = email.indexOf('@') + 1;

  return email.substring(domainIndex);
};

const domainNamesOf = function (emails) {
  return emails.map(domains);
};

const splitWord = function (string) {
  return string.split(' ');
};

const splitWordsOf = function (strings) {
  return strings.map(splitWord);
};

const joinedArray = function (array) {
  return array.join('');
};

const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(joinedArray);
};

const repeatedStringsOf = function (strings) {
  return strings.map(double);
};

const isVowel = function (character) {
  return vowels.includes(character.toLowerCase());
};

const countVowels = function (count, character) {
  if (isVowel(character.toLowerCase())) {
    count++;
  }

  return count;
};

const countAllVowels = function (string) {
  return [...string].reduce(countVowels, 0);
};

const countVowelsOf = function (strings) {
  return strings.map(countAllVowels);
};

const reverseArray = function (array) {
  return array.reverse();
};

const reversedArraysOf = function (arrays) {
  return arrays.map(reverseArray);
};

const removeVowels = function (string) {
  return string.replace(/[aeiou]/gi, '');
};

const withoutVowelsOf = function (strings) {
  return strings.map(removeVowels);
};

const getRunningTotal = function (totals, value) {
  totals.push(value + totals.at(-1));

  return totals;
};

const runningTotal = function ([first, ...numbers]) {
  if (first === undefined) {
    return [];
  }

  return numbers.reduce(getRunningTotal, [first]);
};

const cumulativeSumsOf = function (arrays) {
  return arrays.map(runningTotal);
};

const reverseWord = function (string) {
  return string.replace(/\S+/g, reverseString);
};

const reversedWordsOf = function (strings) {
  return strings.map(reverseWord);
};

const getUniques = function (unique, string) {
  if (unique.length > 2 || string === '') {
    return unique;
  }

  if (!unique.includes(string[0])) {
    unique += string[0];
  }

  return getUniques(unique, string.slice(1));
};

const uniqueCharacters = function (string) {
  return getUniques('', string);
};

const uniqueCharactersOf = function (strings) {
  return strings.map(uniqueCharacters);
};

const getRange = function (number, index, rangeList) {
  if (index >= number) {
    return rangeList;
  }

  rangeList.push(index);

  return getRange(number, index + 1, rangeList);
};

const range = function (number) {
  return getRange(number, 0, []);
};

const rangesOf = function (numbers) {
  return numbers.map(range);
};

const areEqual = function (array1, array2) {
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

  if (!Array.isArray(array1[0])) {
    return areEqual(array1, array2);
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areArraysEqual(array1[index], array2[index])) {
      return false;
    }
  }

  return true;
};

const testEach = function (failed, [funcName, inputs, expected]) {
  const actual = funcName(inputs);

  if (!areArraysEqual(actual, expected)) {
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

const testCasesForRangesOf = [
  // [rangesOf, [2, 5, 1], [[0, 1], [0, 1, 2, 3, 4], [0]]],
  // [rangesOf, [5, 2], [[0, 1, 2, 3, 4], [0, 1]]],
  [rangesOf, [2], [[0, 1]]],
  // [rangesOf, [0], [[]]],
  // [rangesOf, [], []]
];

const testCasesForUniqueCharacters = [
  [uniqueCharactersOf, ["apple", "banana", "grape"], ["apl", "ban", "gra"]],
  [uniqueCharactersOf, ["company"], ["com"]],
  [uniqueCharactersOf, [""], [""]],
  [uniqueCharactersOf, [], []]
];

const testCasesForReversedWords = [
  [reversedWordsOf, ["hello world", "goodbye moon"],
    ["olleh dlrow", "eybdoog noom"]],
  [reversedWordsOf, ["hello"], ["olleh"]],
  [reversedWordsOf, [""], [""]],
  [reversedWordsOf, [], []]
];

const testCasesForCumulativeSums = [
  [cumulativeSumsOf, [[1, 2, 3], [4, 5, 6]], [[1, 3, 6], [4, 9, 15]]],
  [cumulativeSumsOf, [[1, 1, 3]], [[1, 2, 5]]],
  [cumulativeSumsOf, [[1]], [[1]]],
  [cumulativeSumsOf, [[]], [[]]]
];

const testCasesForWithoutVowelsOf = [
  [withoutVowelsOf, ["apple", "banana", "grape"], ["ppl", "bnn", "grp"]],
  // [withoutVowelsOf, ["gym"], ["gym"]],
  // [withoutVowelsOf, [""], [""]],
  // [withoutVowelsOf, [], []]
];

const testCasesForReversedArrays = [
  [reversedArraysOf, [[1, 2, 3], [4, 5, 6]], [[3, 2, 1], [6, 5, 4]]],
  [reversedArraysOf, [[1]], [[1]]],
  [reversedArraysOf, [[]], [[]]]
];

const testCasesForCountVowelsOf = [
  [countVowelsOf, ["apple", "banana", "grape"], [2, 3, 2]],
  [countVowelsOf, ["gym"], [0]],
  [countVowelsOf, [""], [0]],
  [countVowelsOf, [], []]
];

const testCasesForRepeatedStrings = [
  [repeatedStringsOf, ["hi", "bye"], ["hihi", "byebye"]],
  [repeatedStringsOf, ["hi ", "bye"], ["hi hi ", "byebye"]],
  [repeatedStringsOf, ["hi ", ""], ["hi hi ", ""]],
  [repeatedStringsOf, [""], [""]],
  [repeatedStringsOf, [], []]
];

const testCasesForJoinedArrays = [
  [joinedArraysOf, [["a", "b"], ["c", "d"]], ["ab", "cd"]],
  [joinedArraysOf, [["a", "b"], ["c", ""]], ["ab", "c"]],
  [joinedArraysOf, [["a", "b"]], ["ab"]],
  [joinedArraysOf, [["", ""]], [""]],
];

const testCasesForSplitWords = [
  [splitWordsOf, ["hello world", "goodbye moon"],
    [["hello", "world"], ["goodbye", "moon"]]],
  [splitWordsOf, ["hello", "goodbye"], [["hello"], ["goodbye"]]],
  [splitWordsOf, [""], [[""]]]
];

const testCasesForDomains = [
  [domainNamesOf, ["user1@gmail.com", "admin@yahoo.com"],
    ["gmail.com", "yahoo.com"]],
  [domainNamesOf, ["user1@gmail.com"], ["gmail.com"]],
  [domainNamesOf, [""], [""]],
  [domainNamesOf, [], []],
];

const testCasesForCharCodes = [
  [charCodesOf, ["a", "b", "c"], [97, 98, 99]],
  [charCodesOf, ["a"], [97]]
];

const testCasesForNegatedBooleans = [
  [negatedBooleansOf, [true, false, true], [false, true, false]],
  [negatedBooleansOf, [true], [false]],
  [negatedBooleansOf, [false], [true]],
  [negatedBooleansOf, [], []]
];

const testCasesForDoubleLetters = [
  [doubleLettersOf, ["cat", "dog", "bat"], ["ccaatt", "ddoogg", "bbaatt"]],
  [doubleLettersOf, ["bat"], ["bbaatt"]],
  [doubleLettersOf, [""], [""]],
  [doubleLettersOf, ["pool"], ["ppooooll"]]
];

const testCasesForTruthValues = [
  [truthValuesOf, [0, 1, 2, 3], [false, true, true, true]],
  [truthValuesOf, [0, 1, 2, -3], [false, true, true, true]],
  [truthValuesOf, [0], [false]],
  [truthValuesOf, [1], [true]],
  [truthValuesOf, [], []]
];

const testCasesForReversedStrings = [
  [reversedStringsOf, ["hello", "world"], ["olleh", "dlrow"]],
  [reversedStringsOf, ["hello"], ["olleh"]],
  [reversedStringsOf, [""], [""]],
  [reversedStringsOf, [], []]
];

const testCasesForFirstCharacter = [
  [firstCharactersOf, ["apple", "banana", "kiwi"], ["a", "b", "k"]],
  [firstCharactersOf, ["apple", "", "kiwi"], ["a", "", "k"]],
  [firstCharactersOf, ["", "", ""], ["", "", ""]],
  [firstCharactersOf, [], []]
];

const testForUpperCaseOf = [
  [uppercaseOf, ["hello", "world"], ["HELLO", "WORLD"]],
  [uppercaseOf, ["hello", "wor ld"], ["HELLO", "WOR LD"]],
  [uppercaseOf, ["hello"], ["HELLO"]],
  [uppercaseOf, [""], [""]],
  [uppercaseOf, [], []]
];

const testCasesForLengthsOf = [
  [lengthsOf, ["apple", "banana", "kiwi"], [5, 6, 4]],
  [lengthsOf, ["", "banana", "kiwi"], [0, 6, 4]],
  [lengthsOf, ["", "banana", "ki wi"], [0, 6, 5]],
  [lengthsOf, ["", "", ""], [0, 0, 0]],
  [lengthsOf, [], []]
];

const testCasesForSquaresOf = [
  [squaresOf, [1, 2, 3], [1, 4, 9]],
  [squaresOf, [-1, -2, -3], [1, 4, 9]],
  [squaresOf, [2], [4]],
  [squaresOf, [], []]
];

const testCases = [
  ...testCasesForSquaresOf, ...testCasesForLengthsOf,
  ...testForUpperCaseOf, ...testCasesForFirstCharacter,
  ...testCasesForTruthValues, ...testCasesForReversedStrings,
  ...testCasesForDoubleLetters, ...testCasesForNegatedBooleans,
  ...testCasesForCharCodes, ...testCasesForDomains,
  ...testCasesForSplitWords, ...testCasesForJoinedArrays,
  ...testCasesForRepeatedStrings, ...testCasesForCountVowelsOf,
  ...testCasesForReversedArrays, ...testCasesForWithoutVowelsOf,
  ...testCasesForCumulativeSums, ...testCasesForReversedWords,
  ...testCasesForUniqueCharacters, ...testCasesForRangesOf
];

testAll(testCases);