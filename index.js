// # Functions Exercises

// Print your answers to the console.

// **1. Add Up.**
// Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
let numSum = 0;
function sumIntFrom1ToN(number){
    for (let i = 0; i < number; i++) {
        numSum = numSum + i + 1;
    }
    console.log(numSum);
}
sumIntFrom1ToN(13);

// Examples:
// * sumIntFrom1ToN(4) ➞ 10
// * sumIntFrom1ToN(13) ➞ 91
// * sumIntFrom1ToN(600) ➞ 180300

// **2. Cubed.**
// Create a function that takes in three numbers and returns the sum of its cubes.
function sumOfCubes (a = 0, b = 0, c = 0){
    console.log ((a*a*a)+ (b*b*b) + (c*c*c))
}
sumOfCubes(1, 5, 9);
sumOfCubes(2);
sumOfCubes();
// Examples:
// * sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes(2) ➞ 8
// * sumOfCubes() ➞ 0

// **3. String Check.**
// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
function isStrStartOfWord(word, string){
    if(word[0] === string[0] && word[1]=== string[1]){
        return true;
    } else{
        return false;
    }
}


isStrStartOfWord("bu", "button")
console.log(isStrStartOfWord("bu", "button"))
console.log(isStrStartOfWord("tri", "triplet"))
console.log(isStrStartOfWord("beau", "pastry"))

// Examples:
// * isStrStartOfWord("bu", "button") ➞ true
// * isStrStartOfWord("tri", "triplet") ➞ true
// * isStrStartOfWord("beau", "pastry") ➞ false

// **4. Less Than or Equal to Zero?**
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function isLEQZero(number){
    if(number <= 0){
        console.log(true)
    }else{
        console.log(false)
    }
}
isLEQZero(3)
isLEQZero(0)
isLEQZero(-4)
isLEQZero(10)

// Examples:
// * isLEQZero(3) ➞ false
// * isLEQZero(0) ➞ true
// * isLEQZero(-4) ➞ true
// * isLEQZero(10) ➞ false

// **5. Count Occurrences.**
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
function countOccurrences(string, letter){
let letterCOunt = 0
for (let i = 0; i < string.length; i++) {
    if(string[i] === letter){
        letterCOunt++
    }
    
}
console.log(letterCOunt)
}

countOccurrences("this is a string", "i")
// Example:
// * countOccurrences("this is a string", "i") ➞ 3

// **6. X To The Power of X.**
// Create a function that takes a base number and an exponent number and returns the calculation. **NB:** All test inputs will be positive integers.

// Examples:
// * calcBaseToExponent(5, 5) ➞ 3125
// * calcBaseToExponent(10, 10) ➞ 10000000000
// * calcBaseToExponent(3, 3) ➞ 27
function calcBaseToExponent(base, exponent) {
    
    let c = (base ** exponent );

    console.log(c);
}

calcBaseToExponent(5, 5);
calcBaseToExponent(10, 10) ;
calcBaseToExponent(3, 3);
// **7. Dog Years.**
// Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years. Calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.
function dogAge(humanage){
    const dogYears = humanage * 7;
    console.log(dogYears);
}
dogAge(4);

// Example:
// * dogAge(4) ➞ "Your doggo is 28 years old in dog years!"

// **8. A Lifetime Supply...**
// You just won a lifetime supply of your favourite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime".  Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100. 
function calcLifetimeSupply(age, amountPerDay){
    let year = 365.25;
    let ageLeft = (100 - age);
    let totalDays = year * ageLeft;
    console.log(`The snack company should provide you with ${totalDays * amountPerDay} units, until you are a ripe old age of 100. Happy snacking!`)
}

calcLifetimeSupply(25, 2)
calcLifetimeSupply(40, 3)
// Examples:
// * calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

// * calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

// **Bonus:** 
// 1) Accept a third argument for maximum age (just in case the snack company has a particular maximum age cut off). 
// 2) Accept floating point values for amount per day and round the result (in case the snack company has some weird average calculation for amount per day).

//     * calcLifetimeSupply(32, 0.58, 65) ➞ "The snack company should provide you with 14,406 units, until you are a ripe old age of 65. Happy snacking!"

// **9. Where's Waldo?**
// Create a function that takes a string and returns true if Waldo is found, and false if he's not.
function isWaldoHere(string){
    string = string.toLowerCase();
    if (string.includes("waldo")){
        console.log(true);
    } else{
        console.log(false);
    }
}
// Examples:
isWaldoHere("is there a wal here?")
isWaldoHere("I found you Waldo!")
isWaldoHere("Wait, don't you mean Wally?")
isWaldoHere("waldo is here")

// **10. Pie.**
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

// * Total number of slices.
// * Number of recipients.
// * How many slices each person gets.
function isEqualSlices(totalNumberOfSlices, numberOfRecipients, slicesPersonGets){
    if(numberOfRecipients * slicesPersonGets > totalNumberOfSlices){
        console.log(false);
    } else{
        console.log(true);
    }
}
// Examples:
isEqualSlices(11, 5, 3) // 5 people x 3 slices each = 15 slices > 11 slices

isEqualSlices(8, 3, 2);
isEqualSlices(8, 3, 3);
isEqualSlices(24, 12, 2);

// **11. XO**
// Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.
let xInString = 0;
let oInString = 0;
function isEqualNumXandO(string){
    for (let i = 0; i < string.length; i++) {
        const letterOfString = string[i];
        if(letterOfString === "x"){
            xInString++;
        } else if (letterOfString === "o"){
            oInString++;
        }
    }
      if (xInString > 0 && oInString > 0 && xInString === oInString) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqualNumXandO("ooxx"));
console.log(isEqualNumXandO("xooxx"));
console.log(isEqualNumXandO("ooxXm"));
console.log(isEqualNumXandO("zpzpzpp"));
console.log(isEqualNumXandO("zzoo"));
// Notes:

// * Return a boolean value (true or false).
// * The string can contain any character.
// * When neither an x nor an o is in the string, return true.

// Examples:
// * isEqualNumXandO("ooxx") ➞ true
// * isEqualNumXandO("xooxx") ➞ false
// * isEqualNumXandO("ooxXm") ➞ true (case insensitive)
// * isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
// * isEqualNumXandO("zzoo") ➞ false

// **12. isPrime?**
// Create a function that returns true if a number is a prime number, and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:
// * isPrime(7) ➞ true
// * isPrime(9) ➞ false
// * isPrime(10) ➞ false



// **13. Validate Email.**
// Create a function that takes a string, checks for valid email address syntax, and then returns either true or false accordingly.

// NOTE: email syntax is more complicated than you might think (see https://en.wikipedia.org/wiki/Email_address#Syntax), so we do not expect you to cover all cases! Just work your way through the below simplified validation criteria:

// * The string must contain exactly one "@" character
// * The string must contain at least one "." character
// * The "." and the "@" must be in the appropriate places:
//     * neither "." nor "@" can be the last character
//     * "." can neither be directly before, nor directly after, "@"
//     * there cannot be consecutive "." characters
//     * "@" must have at least one character in front of it

// Examples:
// * "j@example.com" is valid while "@example.com" is invalid
// * e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid
// * e.g. "john..smith@email.com" and "john.@email.com" and "john@.email.com" are all invalid
function checkEmails(email){
    email = email.toLowerCase();
    if(email.includes("@") && email.includes("." >= 1) && email.indexOf("@" !== -1) && email.indexOf("." !== -1)){
        console.log(`${email} is valid`);
    } else{
        console.log(`${email} is invalid`);
    }
}
checkEmails("kalaya.cha@yahoo.fr")
// **Good Luck & Enjoy :)**

