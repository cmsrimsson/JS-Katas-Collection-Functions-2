    //1. Add

function add(a, b) {
    return a + b
  }
  let addition = add(11, 8)
  console.log(addition);


    //2.Multiply

function multiply(a, b) {
        let product = 0;
        let count= 0;
        while (count<b) {
            product=add (a,product)
            count++
        }
        return product;
    }
    console.log(multiply(25,7));


    //3.Power

function exponentiation(x, n) {
        let product = 1;
        let count= 0;
        while (count<n) {
            product = multiply (x,product)
            count++
        }
        return product;
    }
    console.log(exponentiation(11,7));


//4.Factorial

function factorial(p) {
    let product = 1;
    let count= 0;
    while (count<p) {
        product = multiply (p,product)
        p--
    }
    return product;
}
console.log(factorial(4));



//Bonus: Fibonacci
// 0	1	1	2	3	5	8	13	21	34	55	89	144	233	377	610	987	1597 2584 4181 6765


let fibonacci = function(num) {
    if (num === 1){
        return 0;
    }
    if(num === 2){
        return 1
    }
    return fibonacci(num-1) + fibonacci(num-2);
};
console.log(fibonacci(10));
    
 
   



///4.Factorial
    // math.factorial()
    //Let n = 0;
    // function factorial(n) {
    // return math.factorial(n)
    // }
    //  let result = factorial(5)
    //  console.log(result);
    
  
    