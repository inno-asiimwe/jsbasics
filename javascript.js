let officialName = prompt( "What is the official name of JavaScript?");

if (officialName == 'ECMAScript') {
    alert( "Right!" );
} else {
    alert( "You do not know? 'ECMAScript'!");
}

let num = prompt( "Enter a number", 0);

if (num > 0) {
    alert( 1 );
} else if (num < 0) {
    alert( -1 );
} else {
    alert( 0 );
}

let currentUser = prompt( "Who's there?" );

if (currentUser == 'Admin') {
    let pass = prompt( "Password" );

    if (pass == 'TheMaster') {
        alert( "Welcome" );
    } else if (pass == "" || pass == null) {
        alert("Canceled");
    } else {
        alert( "Wrong Password");
    }
} else if ( currentUser == "" || currentUser == null) {
    alert( "Canceled.");
} else {
    alert( "I don't know you" );
}

//unary
result = (a + b < 4) ? 'Below' : 'Over';

let message = (login == 'Employee') ? "Hello" :
    (login == 'Director') ? "Greetings" :
    (login == '') ? "No login" : 
    '';