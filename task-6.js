export default function () { 
  console.log("task 6!") 
  // swap value a, b not using tmp
  let a = 6;
  let b = 4;
  a = a - b; // a = 6 - 4 = 2
  b = a + b; // b = 2 + 4 = 6
  a = b - a; // a = 6 - 2 = 4
}