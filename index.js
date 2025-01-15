/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
//const tongueTwister =s1+s2+s3+s4+s5;
//console.log(tongueTwister);
const message =`${s1}${s2}${s3}${s4}${s5}`;


// Print out the concatenated string

console.log(message);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
const uppercasedPart1= part1[part1.length-1].toUpperCase();
console.log(uppercasedPart1);

const finalPart1 = part1.slice(0,part1.length-1) + uppercasedPart1 ;
console.log(finalPart1);

const uppercasedPart2= part2[part2.length-1].toUpperCase();
console.log(uppercasedPart2);

const finalPart2 = part2.slice(0,part2.length-1) + uppercasedPart2 ;
console.log(finalPart2);

const result= finalPart1+finalPart2;

// Print the cameLtaiL-formatted string
console.log(result);




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tip= billTotal*(15/100);
const tipAmount= billTotal+tip;

// Print out the tipAmount

console.log(tipAmount);


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
  }
  
  let randomInteger= randomNumber(1,10);
  

// Print the generated random number
console.log(randomInteger);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

const expression2 = a || b;

const expression3 = !a && b;

const expression4 = !(a && b);

const expression5 = !a || !b;

const expression6 = !(a || b);

const expression7 = a && a;