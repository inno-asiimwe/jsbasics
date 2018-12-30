/* 
    Js is dynamically typed, variables are not bound to data types.
    js datatypes
    - number
    - string
    - boolean
    - null
    - undefined
    - objects
    - symbol
*/

// number , type serves for both intergers and floating point
let n = 123;
n = 12.345;

// String, a string in js must be quoated
let str = "Hello";
let str2 = 'Single qoutes are ok too';
let phrase = `can embed ${str}`;

let name = "John";

alert( `Hello ${name}`);

alert( `the result is ${1 + 2}`);

// boolean true or false
let nameFieldChecked = true;
let ageFieldChecked = false;

// can be a result of comparisons
let isGreater = 4 > 1;
alert( isGreater );

// the null value is in a type of its own
// in js null is a special value which has a sense of nothing, empty, unknown value
let age = null;
// in this case age is unknown

// undefined also makes a type of its own. Value is not assigned.
let x;
alert(x);

// objects are a complex data type
// symbol type is used to create unique indentifiers for objects.

// typeof operator returns the type of the argument.

alert(typeof 9);
alert(typeof("id"));

/* 
    Type conversions in js
*/

// ToString
let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);

// ToNumber
alert("6" / "2");
// Mathematial functions and expressions performs automatic conversions
// explicit conversion
let str1 = "123";
alert(typeof str1);

let num = Number(str1);

alert(typeof num);

// if the string is not a valid number, the result is NaN
let age1 = Number("some string");
alert(age1);

// ToBoolean conversions, values that are intuitevly empty like, 0, null, undefined, NaNa are converted to false and the rest true