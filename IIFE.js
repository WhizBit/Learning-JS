// IIFE -> Immediately Invoked Function Expressions

// Function that is to be executed immediatley 


(function Main(){ // Names IIFE
    console.log('Naman is Learning')
})(); // Immediatley running, Wrapping Function in Parenthesis
// IIFE donot know where to end the context so to end that we need to place ; at the end 

// Helps in removing the pollution by the global variables 

( (name) => { // Unnamed IIFE
    console.log(`Hey ${name} you know it`);
})('Naman')