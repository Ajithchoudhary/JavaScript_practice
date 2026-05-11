//Type Casting & Flow Control

//Task 1 – Predict the Output
//Write the output and datatype for below:
console.log("10" + 5)       //105
console.log(typeof("10" + 5))    //string

console.log(10 + true) //11
console.log(typeof(10 + true)) //number

console.log(false + null) //0
console.log(typeof(false + null)) //number

console.log("Hello" + undefined) // Helloundefined
console.log(typeof("Hello" + undefined)) // string

console.log([1,2] + 5)   //1,25
console.log(typeof([1,2] + 5) )  // string



//Task 2 – Implicit Type Casting ===>Create examples for:
// Print datatype using typeof.

console.log("100" + 100);
console.log(typeof("100" + 100));

console.log(true+45);
console.log(typeof(true+45));

console.log([6,45,85] + "Clock");
console.log(typeof([6,45,85] + "Clock"));

let obj  = {a:10};
console.log(obj + 52);
console.log(typeof(obj + 52));

console.log(null+7);
console.log(typeof(null+7));

//Task 3 – Explicit Type Casting ===> Convert the following into Number:
console.log(Number("500"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number("abc"));
console.log(Number([100]));


//Task 4 – Boolean Constructor ===>Check whether below values are true or false using Boolean().
console.log(Boolean(""));
console.log(Boolean("javascript"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean({}));


//Task 5 – Student Pass or Fail====> 
let mark = 45
if(mark < 100) {
if (mark >=35 ) {
    console.log("pass");
    
}else{
    console.log("fail"); 
}
} else{
    console.log("Enter below 100");
    
}


//Task 6 – Voting Eligibility
let age = 20;
if(age >=18){
    console.log("You are Eligible");
}else{
    console.log("Not Eligible");
}


//Task 7 – Greatest Number
let a = 50
let b = 80
let c = 30

if(a> b && a > c){
    console.log("A is greater");   
}else if(b > c && b > a ){
        console.log("B is greater");
}else{
    console.log("C is greater");  
}


//Task 8 – Traffic Light System ===> Using switch statement:

let signal = "green"
switch(signal){
    case "red": {
        console.log("stop..."); 
        break;
    }
    case "yellow" :{
        console.log("ready..."); 
        break;        
    }
    case "green":{
        console.log("Go..."); 
        break;        
    }
    default:{
        console.log("Choose Properly ....");
        
    }
    
}


//Task 9 – Login System

let username = "admin"
let password = "1234"

if(username == "admin"){
    if(password == "1234"){
        console.log("Login Success...");
        
    }else {
    console.log("Invalid Password...");
    
}
}else {
    console.log("Invalid Login...");
    
}

//Task 10 – Session Finder
let hour = 24;

if (hour >= 1 && hour <= 12) {
    console.log("Good Morning");
} else if (hour >= 13 && hour <= 15) {
    console.log("Good Afternoon");
} else if (hour >= 16 && hour <= 19) {
    console.log("Good Evening");
} else if (hour >= 20 && hour <= 24) {
    console.log("Good Night");
} else {
    console.log("Invalid Hour");
}


// Bonus Challenge 🔥
// console.log(true + true)
// console.log("5" - 2)
// console.log("5" + 2)
// console.log(null + 1)
// console.log(undefined + 1)
// console.log(Boolean(" "))
// console.log(Number(true)) 

// Output are :
2
3
"52"
1
NaN
true
1