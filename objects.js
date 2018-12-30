let user = {
    name: "John",
    surname: "Smith"
};

user.name = "pete";

delete user.name;


function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }
    return true;

}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

// function sumSalaries(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         sum += obj[key];
//     }
//     return sum;
// }

let sumSalaries = (obj) => {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

alert( sumSalaries(salaries) );

let multiplyNumeric = (obj) => {
    
    for (let key in obj) {
        if (!(typeof obj[key] == "number")) continue;
        obj[key] *= 2; 
    }
}

let displayObject = (obj) => {
    for(let key in obj) {
        alert(obj[key]);
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

// displayObject(menu);

multiplyNumeric(menu);

displayObject(menu);



