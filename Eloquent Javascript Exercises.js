// Eloquent Javascript
// Chapter 2
// Exercise 1 'Looping a Triangle'
for (var i = '#'; i.length <= 7; i += '#') {
  console.log(i);
}

// Exercise 2 'FizzBuzz'
for (var fb = 0; fb <= 15; fb++) {
  if (fb % 3 === 0 && fb % 5 === 0) {
    console.log('FizzBuzz!');
  } else if (fb % 3 === 0) {
    console.log('Fizz');
  } else if (fb % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(fb);
  }
}

// Exercise 3 'Chess Board'
var size = 8;

var chessBoard = ''; // Empty string to add characters to

for (var x = 0; x < size; x++) {    // In this loop a newline is added to separate rows
  for (var y = 0; y < size; y++) {  // The inner loop creates a line and adds ' ' or '#' to the string
    if ((x + y) % 2 === 0) {
      chessBoard += ' ';
    } else {
      chessBoard += '#';
    }
  }
  chessBoard += '\n';
}

console.log(chessBoard);

// Chapter 3
// Exercise 1 'Minimum'
var minMath = function (num1, num2) {
  if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
};

console.log(minMath(2, 10));

// Exercise 2 'Recursion'
var isEven = function (number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isEven(-2));

// Exercise 3 'Bean Counting'
var countBs = function (bWord, letter) {
  var bNum = 0;
  for (var word = 0; word <= bWord.length; word++) {
    if (bWord.charAt(word) === letter) {
      bNum++;
    }
  }
  return bNum;
};

console.log(countBs('memes', 'm'));
