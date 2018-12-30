//Function Declaration

// function showMessage() {
//     alert( 'Hello everyone' );
// }

//calling the function
// showMessage();
// showMessage();

// pass parameters to functions
function showMessage(from, text) {
    from = `* ${ from } *`
    alert(from + ' : ' + text);
}

showMessage('Ann', 'hello');

//
// function checkAge(age) {
//     result = (age > 18) ? true : false;
//     return result;
// }

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?')
}

function min(a, b) {
    if (a < b) {
        return a;
    }
    if (b < a) {
        return b;
    }
    return "The numbers are equal";
}

// function expressions
// let sayHi = function() {
//     alert( "Hello" );
// };

// callback functions
// function ask(question, yes, no) {
//     if (confirm(question)) {
//         yes();
//     } else {
//         no();
//     }
// }

// function showOk() {
//     alert( 'You agreed.' );
// }

// function showCancel() {
//     alert( 'You cancelled' );
// }
// ask("Do you agree?", showOk, showCancel);

// ask(
//     "Do you agree?",
//     function() { alert( 'You agreed.'); },
//     function() { alert( 'You cancelled' ); }
// );


/**
 * Arrow functions
 */

 // let func = (arg1, arg2, ...argN) => expression

//  let sum = (a, b) => a + b;
//  alert( sum(1,2) );

 // single arg parentheses can be omitted
 let double = n => n * 2;

 alert( double(3) );

 // no arguments parentheses should be empty
 let greeting = () => alert("Hello");
 greeting();


let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => alert('Hello') :
    () => alert("Greetings");

welcome();
// for multiline arrow functions use curly braces and a return statement

let sum = (a, b) => {
    let result = a + b;
    return result;
}
 alert( sum(1, 2) );

 // rewriting with arrow functions

 let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
 }

 ask(
     "Do you agree?",
     () => alert('You agreed.'),
     () => alert("You cancelled.")
 );