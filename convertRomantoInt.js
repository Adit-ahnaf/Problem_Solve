
let input = "LVIII";
let sum = 0;
let output;

for (let i = 0; i < input.length; i++) {
  if (options(input[i]) < options(input[i + 1])) {
    sum = sum + (options(input[i + 1]) - options(input[i]));
    i++;
  } else sum += options(input[i]);
}

// return sum 
console.log(sum);

function options(opt) {
  switch (opt) {
    case "X":
      return 10;
      break;
    case "I":
      return 1;
      break;
    case "V":
      return 5;
      break;
    case "L":
      return 50;
      break;
    case "C":
      return 100;
      break;
    case "D":
      return 500;
      break;
    case "M":
      return 1000;
      break;
  }
}
