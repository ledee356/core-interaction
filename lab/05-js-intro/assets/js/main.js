// CONSOLE
console.log('hello world!');
console.log('');

// STRINGS
console.log('Strings -');
console.log('I wan\'t a smoothie!!');
console.log(':P' + ':0');

console.log('');

// NUMBERS
console.log('Numbers -')
console.log(8);
console.log(8 + 8);
console.log(8 - 8);
console.log(8 * 8);
console.log(8 / 8);
console.log(8 % 3);

console.log('');

// STRINGS & NUMBERS
console.log('Strings & Numbers -');

console.log('8 * 8');
console.log('8 * 8' + 8);
console.log('cheese' + 8);
console.log('I am ' + (8 * 8) + ' yrs old');
console.log('8 * 8', 8 * 8);

console.log('');

// BOOLEANS
console.log('Booleans -');
console.log(true, false);
console.log('3 > 4:' , 3 > 4);
console.log('2 <= 2:' , 2 <= 2);
console.log('2 > 1 && 2 < 12:' , 2 > 1 && 2 < 12); // 'AND' operator
console.log('5 > 12 || 6 <= 10:' , 5 > 12 || 6 <= 10); // 'OR' operator

console.log('');

// THREE BASIC TYPES
console.log('Basic Types -');

console.log(typeof 'hello', typeof (8 - 7), typeof (2 > 1) );

console.log('');

// VARIABLES
console.log('Variables -');

var five = 5;
console.log('five:', five);
var ten = 10;
console.log('five + ten:' , five + ten);
console.log('five * ten:' , five * ten);

console.log('Variable -');

// ALTERING VARIABLES
console.log('Altering Variables -');

var myStudentDebt = 800;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt = myStudentDebt - 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt -= 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt += 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt ++; // + 1
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt --; // - 1
console.log('myStudentDebt:', myStudentDebt);

console.log('');

//ARRAYS
console.log('Arrays -');
var myLuckyNumbers = [15, 11, 'eight', (12 + 2), 28]; //[val, val, val]
console.log('myLuckyNumbers:' , myLuckyNumbers);
console.log(myLuckyNumbers[1]);

//OBJECTS
console.log('Objects -');

var me = {
  name: 'Bryant',
  age: 27,
  nativeNewYork: false
};
console.log('me', me);
console.log("me['name':]", me['name']);

console.log('');

//FUNCTIONS
console.log('Functions -');

var sayHi = function() {
  console.log('hi!')
};

console.log('sayHi:');
sayHi();


var saySomeMessage = function(message) {
  console.log(message);
}

console.log("saySomeMessage(\'hello'\):");
saySomeMessage('hello');
saySomeMessage('goodbye');


var addNumbers = function(num1, num2) {
  return num1 + num2
};

console.log(addNumbers(8,12));
