/*
 call back function is a function that passed as an argument to another function
*/

const calculate = (a,b, operation) => {

 
   return operation(a,b)
}

const adition = calculate(2,4, function(num1,num2){
    return num1*num2
})

// console.log(adition);

const subtraction = (a,b) => a-b

const subResult = calculate(44,2,subtraction)

// console.log(subResult);

const hello = () => {
   console.log('hello');
} 

setTimeout(hello, 3000)