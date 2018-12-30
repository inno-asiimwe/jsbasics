/**
 * While
 * for
 */

 /* 
    while (condition) {
        // code
    }
 */

//  let i = 0;
//  while (i < 3) {
//      alert ( i );
//      i++;
//  }

//  let x = 3;
//  while (x) {
//      alert(x);
//      x--;
//  }

 // do while

 /*
    do {
        // loop body
    } while (condition);
 */
// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i < 3);

// for loop

/* 
    for (begin; condition; step) {
        // ... loop body ...
    }
*/

// for (let i = 0; i < 3; i++) {
//     alert(i);
// }
 /**
  * break forces loop to exit
  * continue stops current interation a
  */

  // printing odd numbers
//   for (let i = 0; i < 10; i++) {
//       if (i % 2 == 0) continue;
//       alert(i)
//   }

  // without continue 
//   for (let i = 0; i < 10; i++) {
//       if (i % 2) {
//           alert(i);
//       }
//   }

  // No break/continue to the right of ?

  // Even numbers 2 to 10
//   for(i = 0; i < 11; i++) {
//       if (i % 2) continue;
//       alert(i);
//   }

// let i = 0;

// while(i < 3) {
//     alert( `number ${i}`);
//     i++;
// }

let num;

do {
    num = prompt("Enter a number greater than 100", 0);
} while (num <= 100 && num)


// prime numbers the easy way
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j ==0) continue nextPrime;
    }
    alert(i);
}