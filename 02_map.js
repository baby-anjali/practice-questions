import { testAll } from "../../tryouts/import_export/functions_library/test_framework.js";

import { firstCharacter } from "../../tryouts/import_export/functions_library/miscellaneous.js";

const splitWord = (string) => string.split(" ");

const capitaliseFirst = (word) =>
  word.length > 0 ? word[0].toUpperCase() + word.slice(1) : "";

const capitalizedFirstLettersOf = (strings) =>
  strings.map((string) => splitWord(string).map(capitaliseFirst).join(" "));

const wordLengthsOf = (strings) =>
  strings.map((string) => splitWord(string).map((word) => word.length));

const flattenedArraysOf = (arrayOfArrays) =>
  arrayOfArrays.map((array) => array.flatMap((x) => x));

const sortedLettersOf = (strings) =>
  strings.map((word) => [...word].sort().join(""));

const wrappedStringsOf = (strings) => strings.map((word) => "[" + word + "]");

const extractNames = (objects) =>
  objects.map((object) => ("name" in object ? object.name : ""));

const extractAges = (objects) =>
  objects.map((object) => ("age" in object ? object.age : 0));

const firstLettersOfNames = (objects) =>
  objects.map((object) => ("name" in object ? object.name[0] : ""));

const calculateAreas = (rectangles) =>
  rectangles.map(({ width, height }) => width * height);

const extractFlags = (objects) => objects.map(({ active }) => active);

const fullNames = (objects) =>
  objects.map(({ firstName, lastName }) => [firstName, lastName].join(" "));

const totalPrices = (objects) =>
  objects.map(({ price, quantity }) => price * quantity);

const isAdult = (objects) => objects.map(({ age }) => age > 18);

const abbreviate = (strings) => splitWord(strings).map(firstCharacter).join("");

const abbreviations = (objects) =>
  objects.map(({ city, country }) => [city].map(abbreviate) + ", " + country);

const mathScores = (objects) => objects.map(({ scores }) => scores.math);

const extractCoordinates = (objects) => objects.map(({ x, y }) => [x, y]);

const fullNameAndAge = (objects) =>
  objects.map((obj) => fullNames([obj]).concat(obj.age));

const extractScores = (objects) =>
  objects.map(({ scores }) => Object.values(scores));

const keyValuePairs = (objects) =>
  objects.map(({ key, value }) => [key, value]);

const testForKeyValuePairs = [
  [
    keyValuePairs,
    [
      { key: "a", value: 1 },
      { key: "b", value: 2 },
    ],
    [
      ["a", 1],
      ["b", 2],
    ],
  ],
  [keyValuePairs, [{ key: "b", value: 2 }], [["b", 2]]],
];

const testForExtractScores = [
  [
    extractScores,
    [
      { name: "Alice", scores: { math: 90, english: 85 } },
      { name: "Bob", scores: { math: 80, english: 75 } },
    ],
    [
      [90, 85],
      [80, 75],
    ],
  ],
  [
    extractScores,
    [{ name: "Bob", scores: { math: 80, english: 75 } }],
    [[80, 75]],
  ],
];

const testForFullNamesAndAge = [
  [
    fullNameAndAge,
    [
      { firstName: "Alice", lastName: "Smith", age: 25 },
      { firstName: "Bob", lastName: "Brown", age: 30 },
    ],
    [
      ["Alice Smith", 25],
      ["Bob Brown", 30],
    ],
  ],
  [
    fullNameAndAge,
    [{ firstName: "Bob", lastName: "Brown", age: 30 }],
    [["Bob Brown", 30]],
  ],
];

const testForExtractCoordinates = [
  [
    extractCoordinates,
    [
      { x: 1, y: 2 },
      { x: 3, y: 4 },
    ],
    [
      [1, 2],
      [3, 4],
    ],
  ],
  [extractCoordinates, [{ y: 3, x: 4 }], [[4, 3]]],
];

const testForMathScores = [
  [
    mathScores,
    [
      { name: "Alice", scores: { math: 90, english: 85 } },
      { name: "Bob", scores: { math: 80, english: 75 } },
    ],
    [90, 80],
  ],
  [mathScores, [{ name: "Bob", scores: { math: 80, english: 75 } }], [80]],
];

const testForAbbreviations = [
  [
    abbreviations,
    [
      { city: "New York", country: "USA" },
      { city: "Los Angeles", country: "USA" },
    ],
    ["NY, USA", "LA, USA"],
  ],
  [abbreviations, [{ city: "Los Angeles", country: "USA" }], ["LA, USA"]],
  [abbreviations, [{ city: "New Delhi", country: "India" }], ["ND, India"]],
];

const testForIsAdult = [
  [
    isAdult,
    [
      { name: "Alice", age: 17 },
      { name: "Bob", age: 22 },
    ],
    [false, true],
  ],
  [isAdult, [{ name: "Bob", age: 22 }], [true]],
  [isAdult, [{ name: "Bob", age: 12 }], [false]],
];

const testForTotalPrices = [
  [
    totalPrices,
    [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 4 },
    ],
    [20, 20],
  ],
  [totalPrices, [{ price: 5, quantity: 4 }], [20]],
  [totalPrices, [{ price: 5, quantity: 0 }], [0]],
];

const testForFullNames = [
  [
    fullNames,
    [
      { firstName: "Alice", lastName: "Smith" },
      { firstName: "Bob", lastName: "Brown" },
    ],
    ["Alice Smith", "Bob Brown"],
  ],
  [fullNames, [{ firstName: "Alice", lastName: "Smith" }], ["Alice Smith"]],
];

const testForFlagExtract = [
  [extractFlags, [{ active: true }, { active: false }], [true, false]],
  [extractFlags, [{ active: false }, { active: false }], [false, false]],
  [extractFlags, [{ active: false }, { active: true }], [false, true]],
  [extractFlags, [{ active: false }], [false]],
  [extractFlags, [{ active: true }], [true]],
];

const testForRectangleAreas = [
  [
    calculateAreas,
    [
      { width: 2, height: 3 },
      { width: 4, height: 5 },
    ],
    [6, 20],
  ],
  [calculateAreas, [{ width: 2, height: 3 }], [6]],
  [calculateAreas, [{ width: 2, height: 0 }], [0]],
];

const testForExtractFirstLetters = [
  [firstLettersOfNames, [{ name: "Alice" }, { name: "Bob" }], ["A", "B"]],
  [firstLettersOfNames, [{ name: "alice" }, { name: "Bob" }], ["a", "B"]],
  [firstLettersOfNames, [{ name: "Alice" }, { name: "bob" }], ["A", "b"]],
  [firstLettersOfNames, [{}, {}], ["", ""]],
  [firstLettersOfNames, [], []],
];

const testExtractAges = [
  [extractAges, [{ age: 25 }, { age: 30 }], [25, 30]],
  [extractAges, [{ name: "Alice", age: 25 }, { age: 30 }], [25, 30]],
  [extractAges, [{ name: "Alice", age: 25 }], [25]],
  [extractAges, [{ name: "Alice" }], [0]],
  [extractAges, [{}], [0]],
  [extractAges, [], []],
];

const testExtractNames = [
  [extractNames, [{ name: "Alice" }, { name: "Bob" }], ["Alice", "Bob"]],
  [extractNames, [{ name: "Alice", age: 56 }], ["Alice"]],
  [extractNames, [{ age: 56 }], [""]],
  [extractNames, [{}], [""]],
  [extractNames, [], []],
];

const testWrappedStringsOf = [
  [wrappedStringsOf, ["apple", "banana"], ["[apple]", "[banana]"]],
  [wrappedStringsOf, ["apple"], ["[apple]"]],
  [wrappedStringsOf, [""], ["[]"]],
  [wrappedStringsOf, [], []],
];

const testSortedLettersOf = [
  [sortedLettersOf, ["cat", "bat", "rat"], ["act", "abt", "art"]],
  [sortedLettersOf, ["cactus", "ba t", ""], ["accstu", " abt", ""]],
  [sortedLettersOf, [], []],
];

const testFlattenedArrays = [
  [
    flattenedArraysOf,
    [
      [1, [2, 3]],
      [4, [5, 6]],
    ],
    [
      [1, 2, 3],
      [4, 5, 6],
    ],
  ],
  [flattenedArraysOf, [[1, [2]], [[5]]], [[1, 2], [5]]],
  [flattenedArraysOf, [], []],
];

const testWordLengthsOf = [
  [
    wordLengthsOf,
    ["apple pie", "banana split"],
    [
      [5, 3],
      [6, 5],
    ],
  ],
  [wordLengthsOf, ["apple", "split"], [[5], [5]]],
  [wordLengthsOf, ["apple", ""], [[5], [0]]],
  [wordLengthsOf, [], []],
];

const testCaseForCapitalizeFirst = [
  [
    capitalizedFirstLettersOf,
    ["hello world", "goodbye moon"],
    ["Hello World", "Goodbye Moon"],
  ],
  [capitalizedFirstLettersOf, ["goodbye moon"], ["Goodbye Moon"]],
  [capitalizedFirstLettersOf, ["goodbye"], ["Goodbye"]],
  [capitalizedFirstLettersOf, [""], [""]],
  [capitalizedFirstLettersOf, [], []],
];

const testCases = [
  ...testCaseForCapitalizeFirst,
  ...testWordLengthsOf,
  ...testFlattenedArrays,
  ...testSortedLettersOf,
  ...testWrappedStringsOf,
  ...testExtractNames,
  ...testExtractAges,
  ...testForExtractFirstLetters,
  ...testForRectangleAreas,
  ...testForFlagExtract,
  ...testForFullNames,
  ...testForTotalPrices,
  ...testForIsAdult,
  ...testForAbbreviations,
  ...testForMathScores,
  ...testForExtractCoordinates,
  ...testForFullNamesAndAge,
  ...testForExtractScores,
  ...testForKeyValuePairs,
];

testAll(testCases);
