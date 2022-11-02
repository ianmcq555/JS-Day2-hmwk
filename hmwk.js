//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parse(person3){
    for(let i = 0; i < Object.keys(person3).length; i++){
        console.log(Object.values(person3)[i])
    }
    return person3
}

parse(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name,age){
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method
    this.printInfo = function(){
        console.log(`Name: ${this.name}\nAge: ${this.age}`);

        return 'Returned Value'
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

    this.addAge = function(){
        this.age++;
        console.log(`${this.age}`);

        return 'Added age'
    }
}


let my_self = new Person('Ian', '25')
let my_brother = new Person('Sia', '22')
console.log(my_self.printInfo())
console.log(my_brother.printInfo())
console.log(my_self.addAge())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord = (word) => {
    return new Promise( (resolve,reject) => {
        if(word.length > 10 ){
            resolve(true)
        } else {
            reject(false)
        }
    })
}
isBigWord('strawberry-shortcake')
//Happy resolver path
.then( (result) => {
    console.log(`Big word `)
})
//Sad Reject path
.catch( (error) => {
    console.log(`Small Number`)
})

// CODEWARS
// DESCRIPTION:
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    let newStr = ''
    for(let i = 0; i < str.length; i++){
        if(i !== 0 && i !== str.length -1) {
            newStr += str[i]
        }
    }
    return newStr
}

// DESCRIPTION:
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

var summation = function (num) {
    let sum = 0
    for(let i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}