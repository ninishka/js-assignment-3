
//1

for (let i = 0; i <= 100; i++) {
  console.log(i);
 }

//2

let i = 0;
while (i <= 50) {
 console.log(i);
 i++;
}

//3

// 
let names = ['nini', 'gio', 'saba', 'tamari', 'luka'];
console.log('Initial array:', names);

//
names.pop('luka');
console.log('After pop:', names);

//
names.shift('nini');
console.log('After shift:', names);

//
names.unshift('nuka');
console.log('After unshift:', names);

//
names.push('gvanca');
console.log('After push:', names);

//
const indexToDelete = names.indexOf('luka');
if (indexToDelete !== -1) {
 names.splice(indexToDelete, 1);
}
console.log('After deleting luka:', names);

//
names.push('gaga');
console.log('After adding gaga:', names);

//5

let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log ("the sum is:", sum)

//6

function isOddOrEven(number) {
  return number % 2 === 0; 
}
console.log(isOddOrEven(7)); 
console.log(isOddOrEven(8)); 

//7

function convertToUpperLowerCase(inputString) {
  return inputString.toLowerCase();
}

const uppercaseString = "MY NAME IS JOHN";
const lowercaseString = convertToUpperLowerCase(uppercaseString);

console.log(lowercaseString); 

//8

function filterEvenNumbers(allnumbers) {
  return numbers.filter(number => number % 2 === 0);
}

const allnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = filterEvenNumbers(numbers);

console.log(evenNumbers);
