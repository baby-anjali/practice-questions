import { testAll } from "../../tryouts/import_export/functions_library/test_framework.js";

import { add } from "../../tryouts/import_export/functions_library/math_functions.js";

const vowels = "aeiou";

const square = (number) => number * number;

const squaresOf = (numbers) => numbers.map(square);

const lengths = (string) => string.length;

const lengthsOf = (strings) => strings.map(lengths);

const capitalise = (string) => string.toUpperCase();

const uppercaseOf = (strings) => strings.map(capitalise);

const firstCharacter = (string) => (string === "" ? "" : string[0]);

const firstCharactersOf = (strings) => strings.map(firstCharacter);

const truthValue = (number) => number !== 0;

const truthValuesOf = (numbers) => numbers.map(truthValue);

const reverseString = (string) => [...string].reverse().join("");

const reversedStringsOf = (strings) => strings.map(reverseString);

const double = (value) => value.repeat(2);

const doubleLetters = (string) => [...string].map(double).join("");

const doubleLettersOf = (strings) => strings.map(doubleLetters);

const negateBoolean = (boolean) => !boolean;

const negatedBooleansOf = (booleans) => booleans.map(negateBoolean);

const charCodes = (letter) => letter.charCodeAt(0);

const charCodesOf = (strings) => strings.map(charCodes);

const domains = function (email) {
  const domainIndex = email.indexOf("@") + 1;

  return email.substring(domainIndex);
};

const domainNamesOf = (emails) => emails.map(domains);

const splitWord = (string) => string.split(" ");

const splitWordsOf = (strings) => strings.map(splitWord);

const joinedArray = (array) => array.join("");

const joinedArraysOf = (arrayOfArrays) => arrayOfArrays.map(joinedArray);

const repeatedStringsOf = (strings) => strings.map(double);

const isVowel = (character) => vowels.includes(character.toLowerCase());

const countVowels = (character) => (isVowel(character) ? 1 : 0);

const countAllVowels = (string) => [...string].map(countVowels).reduce(add, 0);

const countVowelsOf = (strings) => strings.map(countAllVowels);

const reverseArray = (array) => array.reverse();

const reversedArraysOf = (arrays) => arrays.map(reverseArray);

const nonVowels = (character) => (isVowel(character) ? "" : character);

const removeVowels = (string) => [...string].map(nonVowels).join("");

const withoutVowelsOf = (strings) => strings.map(removeVowels);

const runningTotal = function (numbers) {
  let total = 0;

  return numbers.map((number) => (total += number));
};

const cumulativeSumsOf = (arrays) => arrays.map(runningTotal);

const reverse = (string) => [...string].reverse().join("");

const reverseWord = (string) => string.split(" ").map(reverse).join(" ");

const reversedWordsOf = (strings) => strings.map(reverseWord);

const getUniques = (character, index, array) =>
  array.indexOf(character) === index ? character : "";

const uniqueCharacters = (string) =>
  [...string].map(getUniques).join("").slice(0, 3);

const uniqueCharactersOf = (strings) => strings.map(uniqueCharacters);

const range = (number) => [...Array(number)].map((e, index) => index);

const rangesOf = (numbers) => numbers.map(range);

const testCasesForRangesOf = [
  [rangesOf, [2, 5, 1], [[0, 1], [0, 1, 2, 3, 4], [0]]],
  [
    rangesOf,
    [5, 2],
    [
      [0, 1, 2, 3, 4],
      [0, 1],
    ],
  ],
  [rangesOf, [2], [[0, 1]]],
  [rangesOf, [0], [[]]],
  [rangesOf, [], []],
];

const testCasesForUniqueCharacters = [
  [uniqueCharactersOf, ["apple", "banana", "grape"], ["apl", "ban", "gra"]],
  [uniqueCharactersOf, ["company"], ["com"]],
  [uniqueCharactersOf, ["krishna"], ["kri"]],
  [uniqueCharactersOf, [""], [""]],
  [uniqueCharactersOf, [], []],
];

const testCasesForReversedWords = [
  [
    reversedWordsOf,
    ["hello world", "goodbye moon"],
    ["olleh dlrow", "eybdoog noom"],
  ],
  [reversedWordsOf, ["hello"], ["olleh"]],
  [reversedWordsOf, [""], [""]],
  [reversedWordsOf, [], []],
];

const testCasesForCumulativeSums = [
  [
    cumulativeSumsOf,
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    [
      [1, 3, 6],
      [4, 9, 15],
    ],
  ],
  [cumulativeSumsOf, [[1, 1, 3]], [[1, 2, 5]]],
  [cumulativeSumsOf, [[1]], [[1]]],
  [cumulativeSumsOf, [[]], [[]]],
];

const testCasesForWithoutVowelsOf = [
  [withoutVowelsOf, ["apple", "banana", "grape"], ["ppl", "bnn", "grp"]],
  // [withoutVowelsOf, ["gym"], ["gym"]],
  // [withoutVowelsOf, [""], [""]],
  // [withoutVowelsOf, [], []]
];

const testCasesForReversedArrays = [
  [
    reversedArraysOf,
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
    [
      [3, 2, 1],
      [6, 5, 4],
    ],
  ],
  [reversedArraysOf, [[1]], [[1]]],
  [reversedArraysOf, [[]], [[]]],
];

const testCasesForCountVowelsOf = [
  [countVowelsOf, ["apple", "banana", "grape"], [2, 3, 2]],
  [countVowelsOf, ["gym"], [0]],
  [countVowelsOf, [""], [0]],
  [countVowelsOf, [], []],
];

const testCasesForRepeatedStrings = [
  [repeatedStringsOf, ["hi", "bye"], ["hihi", "byebye"]],
  [repeatedStringsOf, ["hi ", "bye"], ["hi hi ", "byebye"]],
  [repeatedStringsOf, ["hi ", ""], ["hi hi ", ""]],
  [repeatedStringsOf, [""], [""]],
  [repeatedStringsOf, [], []],
];

const testCasesForJoinedArrays = [
  [
    joinedArraysOf,
    [
      ["a", "b"],
      ["c", "d"],
    ],
    ["ab", "cd"],
  ],
  [
    joinedArraysOf,
    [
      ["a", "b"],
      ["c", ""],
    ],
    ["ab", "c"],
  ],
  [joinedArraysOf, [["a", "b"]], ["ab"]],
  [joinedArraysOf, [["", ""]], [""]],
];

const testCasesForSplitWords = [
  [
    splitWordsOf,
    ["hello world", "goodbye moon"],
    [
      ["hello", "world"],
      ["goodbye", "moon"],
    ],
  ],
  [splitWordsOf, ["hello", "goodbye"], [["hello"], ["goodbye"]]],
  [splitWordsOf, [""], [[""]]],
];

const testCasesForDomains = [
  [
    domainNamesOf,
    ["user1@gmail.com", "admin@yahoo.com"],
    ["gmail.com", "yahoo.com"],
  ],
  [domainNamesOf, ["user1@gmail.com"], ["gmail.com"]],
  [domainNamesOf, [""], [""]],
  [domainNamesOf, [], []],
];

const testCasesForCharCodes = [
  [charCodesOf, ["a", "b", "c"], [97, 98, 99]],
  [charCodesOf, ["a"], [97]],
];

const testCasesForNegatedBooleans = [
  [negatedBooleansOf, [true, false, true], [false, true, false]],
  [negatedBooleansOf, [true], [false]],
  [negatedBooleansOf, [false], [true]],
  [negatedBooleansOf, [], []],
];

const testCasesForDoubleLetters = [
  [doubleLettersOf, ["cat", "dog", "bat"], ["ccaatt", "ddoogg", "bbaatt"]],
  [doubleLettersOf, ["bat"], ["bbaatt"]],
  [doubleLettersOf, [""], [""]],
  [doubleLettersOf, ["pool"], ["ppooooll"]],
];

const testCasesForTruthValues = [
  [truthValuesOf, [0, 1, 2, 3], [false, true, true, true]],
  [truthValuesOf, [0, 1, 2, -3], [false, true, true, true]],
  [truthValuesOf, [0], [false]],
  [truthValuesOf, [1], [true]],
  [truthValuesOf, [], []],
];

const testCasesForReversedStrings = [
  [reversedStringsOf, ["hello", "world"], ["olleh", "dlrow"]],
  [reversedStringsOf, ["hello"], ["olleh"]],
  [reversedStringsOf, [""], [""]],
  [reversedStringsOf, [], []],
];

const testCasesForFirstCharacter = [
  [firstCharactersOf, ["apple", "banana", "kiwi"], ["a", "b", "k"]],
  [firstCharactersOf, ["apple", "", "kiwi"], ["a", "", "k"]],
  [firstCharactersOf, ["", "", ""], ["", "", ""]],
  [firstCharactersOf, [], []],
];

const testForUpperCaseOf = [
  [uppercaseOf, ["hello", "world"], ["HELLO", "WORLD"]],
  [uppercaseOf, ["hello", "wor ld"], ["HELLO", "WOR LD"]],
  [uppercaseOf, ["hello"], ["HELLO"]],
  [uppercaseOf, [""], [""]],
  [uppercaseOf, [], []],
];

const testCasesForLengthsOf = [
  [lengthsOf, ["apple", "banana", "kiwi"], [5, 6, 4]],
  [lengthsOf, ["", "banana", "kiwi"], [0, 6, 4]],
  [lengthsOf, ["", "banana", "ki wi"], [0, 6, 5]],
  [lengthsOf, ["", "", ""], [0, 0, 0]],
  [lengthsOf, [], []],
];

const testCasesForSquaresOf = [
  [squaresOf, [1, 2, 3], [1, 4, 9]],
  [squaresOf, [-1, -2, -3], [1, 4, 9]],
  [squaresOf, [2], [4]],
  [squaresOf, [], []],
];

const testCases = [
  ...testCasesForSquaresOf,
  ...testCasesForLengthsOf,
  ...testForUpperCaseOf,
  ...testCasesForFirstCharacter,
  ...testCasesForTruthValues,
  ...testCasesForReversedStrings,
  ...testCasesForDoubleLetters,
  ...testCasesForNegatedBooleans,
  ...testCasesForCharCodes,
  ...testCasesForDomains,
  ...testCasesForSplitWords,
  ...testCasesForJoinedArrays,
  ...testCasesForRepeatedStrings,
  ...testCasesForCountVowelsOf,
  ...testCasesForReversedArrays,
  ...testCasesForWithoutVowelsOf,
  ...testCasesForCumulativeSums,
  ...testCasesForReversedWords,
  ...testCasesForUniqueCharacters,
  ...testCasesForRangesOf,
];

testAll(testCases);
