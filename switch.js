let a = 2 + 2;

switch(a) {
    case 3:
        alert( 'Too small' );
        break;
    case 4:
        alert( 'Exactly' );
        break;
    case 5:
        alert( 'Too large' );
        break;
    default:
        alert( 'I do not understand the values' );

}

// 
if (browser == "Edge") {
    alert( " You have got the edge" );
} else if (browser == 'Chrome' 
  || browser == 'Firefox'
  || browser == 'Safari'
  || browser == 'Opera') {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok' );
}

//
let a = +prompt('a?', '');

switch(a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}