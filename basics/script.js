console.log("Hellloooo, world!");

/* Objects */
let Amit = {
    name: "Amit",
    age: 25,
    yearOfBirth: 1992,
    race: "Asian"
};

/* Functions */
var age = 25;

function calcAge(yearOfBirth) {

    let age = 2017 - yearOfBirth;
    return age;
}

function displayAge(yearOfBirth) {

    let age = calcAge(yearOfBirth);
    
    if(age >= 25) {
        return "I'm " + age + " years old. Oh man, I'm so old.";
    }
    else {
        return "I'm " + age + "years old. I'm young af.";
    }
}

console.log("My year of birth is 1992. My age is: " + displayAge(1992));

/* Strings */
let lettersAndNumbers = 'abcd1234';
let symbols = '!@#$%^&*()_+|}{';
let emojis = '😀 🦋 🐖 🌵 🍄 🌍 🌞';

console.log(lettersAndNumbers);
console.log(symbols);
console.log(emojis);

