//function greet() {
    //alert('hello world')
//}

//declear a function
//function greet(name) {
  //  document.getElementById("demo").innerHTML="hello" + name + "john";
//}


// variable name can be different
//let name =prompt("Enter a Name:");

//greet(name);


//function add(a,b) {
    //document.getElementById("demo").innerHTML= a-b;
//}

// calling the fucntion
//add(3,4);
//add(2,9);


//SUM OF TWO NUMBERS
//program to add two function
//Declearing a function
//function add (a,b) {
   // return a+b
//}
//take inpute from the user
//let number1=parseFloat(prompt("Enter first Number:"));
//let number2=parseFloat(prompt("Enter second number:"));
//calling the function
//let result =add(number1,number2)

//document.getElementById("demo").innerHTML= result

//PROMPT METHOTH
//A prompt() method displays a dialog box that prompts the user for InputEvent. The prompt( method returns the) 


//FAILSE CONDITION
//let number = -10;
//if (number > 0) {
  //  console.log("do something")
//}
//check if the number is positive
//const num = prompt("Enter a Number:");
//check if the number is greater than 0
//if (num > 0) {
    //body of the statement
  //  console.log("The number is positive");
//}

//If else Statement
//check if the number is positive
//const number =  prompt("Enter a number")
//check if the number is greater than 0
//if( number > 0) {
   //console.log("The number  is positive");
    //The body of the if statement
    //} else {
   //     console.log("The number is nagative");
 //   }


//21-7-2023
//Java script IF... Else if Statement: this is use to execute a block of code 

//The Syntax of the if...else statement:


// THE SWITCH STATEMENT
//PROGRAM USING SWITCH STATMENT
//let a =10;

//switch (a){

   // case 1:
       // a= "one";
      //  break;

      //  case 2:
       //     a="two";
       //     document.write("two")
       //     break;

       //     case 3:
       //     a="three";
       //     document.write("three")
         //   break;
       //     case 4:
       //     a="four";
       //     document.write("four")
       //     break;

        //   default:
         //       document.write("not found");
        //        a="not found";
//}    
              
let result;
//take the operator inpute
const operator = prompt ('Enter operater(either +,-,*, or/):');
//take the second operand inpute
const number1 =parseFloat(prompt('Enter first number:'));
const number2 =parseFloat(prompt('Enter second number:'));

switch(operator) {
    case '+':
    result=number1 + number2;
    document.write(result);
    break;

    case'-':
    result=number1 + number2;
    document.write(result);
    break;

    case'*':
    result=number1 + number2;
    document.write(result);
    break;

    case'/':
    result=number1 / number2;
    document.write(result);
    break;

}
