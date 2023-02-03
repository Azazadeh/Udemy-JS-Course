//Coding Challenge #1 & #2
let markMass = 95;
let markHeight = 1.88;

let johnMass = 85;
let johnHeight = 1.76;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / (johnHeight * johnHeight); // mass / (height * height)

console.log(markBmi);
console.log(johnBmi);

const markHigherBmi = markBmi > johnBmi;
console.log(markHigherBmi);

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's BMI (${johnBmi})`);
} else {
  console.log(`John's BMI (${johnBmi}) is higher than Mark's BMI (${markBmi})`);
}

//Coding Challenge #3

// const dolphinesAverageScore = (96 + 108 + 89) / 3;
// console.log(dolphinesAverageScore);

// const koalasAverageScore = (88 + 91 + 110) / 3;
// console.log(koalasAverageScore);

// if (dolphinesAverageScore > koalasAverageScore) {
//   console.log("Dolphines Are the winners!");
// } else if (dolphinesAverageScore < koalasAverageScore) {
//   console.log("Koalas are the winners!");
// } else {
//   console.log("It's a tie!");
// }

//Bonus 1 and 2

const dolphinesAverageScore = (97 + 112 + 101) / 3;
console.log(dolphinesAverageScore);

const koalasAverageScore = (109 + 95 + 123) / 3;
console.log(koalasAverageScore);

if (
  dolphinesAverageScore > koalasAverageScore &&
  dolphinesAverageScore >= 100
) {
  console.log("Dolphines Are the winners!");
} else if (
  dolphinesAverageScore < koalasAverageScore &&
  koalasAverageScore >= 100
) {
  console.log("Koalas are the winners!");
} else if (
  dolphinesAverageScore === koalasAverageScore &&
  koalasAverageScore >= 100 &&
  dolphinesAverageScore >= 100
) {
  console.log("Both teams are winners!");
} else {
  console.log("No team wins!");
}
