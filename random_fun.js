const pattern =
  "\\/ / \\/ / \\/ / / \\  / /\\  / /\\  / / //  \\/ /  \\/ /  \\ \\ \\ /\\  / /\\  //\\ \\ \\  \\//  \\ \\/ / //  \\  / /\\  / / / /\\ /  \\/ / /  \\// /  /\\ / / /\\  / / ///  \\ \\/ / //  \\ / /\\\\  / / / /";

const random = () => Math.ceil(Math.random() * pattern.length);

const start = random();
const end = pattern.length + start;
let newPattern = "";

// for (let index = start; index < end + index; index++) {
//   if (newPattern)
// }

console.log(random(), pattern.length);
