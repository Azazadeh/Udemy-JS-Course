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
