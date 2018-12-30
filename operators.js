// binary + for string concatenation

let s = "my" + "string";
alert(s);

// other arithmetic operators will convert the operands to numbers
alert(2 - '1');
alert('6' / '2');

// unary + , if operand is not a number it is converted to a number
let x = 1;
alert( +x );

let y = -2;
alert( +y );

// converts non numbers

alert( +true );
alert ( +"" );

// data from forms
let apples = "2";
let oranges = "3";

alert( apples + oranges )  // "23" string concatenation

// treating them as numbers
alert( +apples + +oranges); // 5 

//longer variants
alert( Number(apples) + Number(oranges));

//order of predence 
/**
 *16 Unary plus
 * 16unary negation
 *14 multiplication
 *14 division
 *13 addition
 *13subtraction
 * ...
 *3 assignment
 * ...
 */

 // Reminder % (modulo)
 // a % b is the remainder of the interger division of a by b

 //Exponentiation **
 // a ** b , a multipled by itself b times

 //increment/decrement (++, --)
 // increment increases a variable by 1
 // decrement decreases a variable by 1


 /**
  * Comparisons
  */