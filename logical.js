/**
 * Logical Operators
 * ||(OR)
 * &&(AND)
 * !(NOT)
 */

 // Precedence of && is higher than ||

 // double NOT !! is sometimes used to convert a value to boolean type

 // NOT ! has higher precedence than && and ||

 if (age >= 14 && age <= 90) {
    Pass;
 }

 if (!(age >= 14 && age <= 90)) {
     pass;
 }

 if (age < 14 || age > 90) {
     pass;
 }