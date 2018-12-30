/**
 * Conditional operators: if, ?
 */

 let year = prompt('In which year was ES5 published');

//  if (year == 2015) alert('You are right!');

// if (year == 2015) {
//     alert( "That is correct" );
//     alert( "You are smart" );
// }

// if (year == 2016) {
//     alert( "Nice try" );
// }

/* 
    We can use pre-evaluated values
    let cond = (year == 2015);

    if (cond) {
        ...
    }


*/

// if (year == 2015) {
//     alert( "You guessed right" );

// } else {
//     alert( "How can you be so wrong?");
// }

if (year < 2015) {
    alert( "Too early ..." );
} else if (year > 2015) {
    alert( 'Too late' );
} else {
    alert( 'Exactly' );
}

// let accessAllowed;
// let age = prompt( "How old are you?" );

// if(age > 18) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }

// alert(`accessAllowed: ${ accessAllowed}`);

// Using ternary operator
/**
 * let result = condition ? value1 : value2
 */
// let age = prompt("How old are you?");

// let accessAllowed = (age > 18) ? true : false;

// alert( `accessAllowed: ${ accessAllowed }`);

//multiple ?
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello' :
    (age < 100) ? 'Greetings!' :
    'What an unusual age!';

alert( message );


// Non-traditional use of ?
let company = prompt( "Which company created JavaScript?", '');

(company == "Netscape") ? alert('Right!') : alert('Wrong.');


