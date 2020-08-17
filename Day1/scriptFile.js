//alert('Hai');

function myFunction(a, b) {
    return a * b;             // Function returns the product of a and b
  }

  console.log( myFunction(4, 3));

  ////////////
 //in var we can redefine the variable. it won not throw error.
  var no = 10; 
var no = 20; 
var no2 = 40;
console.log(no);
console.log(no+no2);

////////////////

let number1 = 10; 
//let number1 = 20;  //Uncaught SyntaxError: Identifier 'number1' has already been declared
console.log(number1);



////////////////

const x = 10
const y = 20;
// x = 12 // Uncaught TypeError: Assignment to constant variable.
console.log(x);
console.log(x+y);

//////////////////////

var num = -2 
var result = num > 0 ?"positive":"non-positive" 
console.log(result)

/////////////// ES 6 function

var hello = () => {
    return "Hai Welcome ";
  }

  console.log(hello());

  ///////////////
  const x1 = (x1, y1) => x1 * y1;
  console.log(x1(5, 5));

  ///////////////

