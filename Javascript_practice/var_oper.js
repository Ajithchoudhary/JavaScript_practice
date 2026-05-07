// Sec-1 Variable 
// 1
var a = 10;
a= 15;
console.log("1==>  " +a);

//2 what hapens here?
// let b = 20;
// let b = 30;

console.log("2==>  let variable has no reDeclaratin. So it will show error msg as Uncaught SyntaxError: Identifier b has already been declared...");

// 3 What is the output?
const c = 50;
console.log("3==>  "+c);   //print as 50

//4 Identify error:
// const x = 10;
// x = 20; 
console.log("4==> We cannot change the value of const var. so it will show error.");
  
//5 Output?
var p = 5;
var p = 10;
console.log("5==>  "+p);   //var has reDeclaration.

//6 Output?
let q = 25;
q = q + 10;
console.log("6==>  "+q);  //print as 35

//7 Output?
const r = 7;
console.log(+r + 3);  // it is possible, Here we are not changing the value of constant , so print as 10 

//8 Fill correct keyword:
let a1 = 10;  



//🟢 Section 2: Console Methods (9–12)

//9 Which method prints normal output?
console.log()

//10 Which method shows warning?
console.warn();

//11 Which method shows error?
console.error();

//12 What does this do?
console.clear(); //It clears the console...




//🟢 Section 3: Data Types (13–18)
//13 Output?
let aa = "hello";
console.log("13==>  "+typeof aa);   //we use this method to check what type of dataType : STRING

//14 Output?
let bb = 100;
console.log("14==>  "+typeof bb);  //we use this method to check what type of dataType : NUMBER

//15 Output?
let cc = false;
console.log("15==>  "+typeof cc);   //we use this method to check what type of dataType : BOOLEAN

//16 output ?
let d;
console.log("16==>  "+d); // Ans is UNDEFINED


//17 What is type of null?
console.log(typeof null);  

//18 Convert string to number: "25"
let num ="25";
console.log("19==>  "+Number("25"));



//🟢 Section 4: Arrays (19–24)
//19  Create array of 3 fruits.
let array= ["Apple" , "Banana" , "Grape"]

//20 Output?
let arr1 = ["a","b","c"];
console.log("20==>  "+arr1[1]);  //b

//21 Output?
let arr2 = ["x","y","z"];
console.log(arr2["21==>  "+arr2.length-1]); 

//22 How to get first element?
console.log("22==> "+arr2[0]); 

//23 Output?
let arr3 = ["apple","banana"];
console.log("23==> "+arr3.length);  //2

//24 Add new element to array.
arr3.push("orange");
console.log("24==> "+arr3);



//🟢 Section 5: Objects (25–28)
//25 Create object with name & age.

let object ={
    "name" :"Ajith" ,
    "age" : 24
};
console.log(object);


//26 Output?
let obj1 = {name:"Naveen"};
console.log("26==>  "+obj1.name);  //Naveen

//27 Output?
let obj2 = {
  fruits: ["apple","banana","grape"]
};
console.log("27==>  "+obj2.fruits[1]);   //banana

//28 How to access last element inside object array?
console.log("28==> "+obj2.fruits[obj2.fruits.length-1]);


//🟢 Section 6: Arithmetic Operators (29–32)
//29 Output?
console.log(5 + 3);  //8

//30 Output?
console.log(10 % 3); // print the remainder as 1

//31 Output?
console.log(2 ** 3);  //2 power 3 is :8

//32 Output?
console.log(10 / 2);   //5



//🟢 Section 7: Increment / Decrement (33–36)
//33 output?
let a5 = 5;
a5++;
console.log(a5);

//34Output?
let b5 = 5;
let c5 = b5++;
console.log(b5, c5); // 6, 5

//35 Output?
let x = 5;
let y = ++x;
console.log(x, y);  //6 , 6

//Output?
let m = 3;
let n = m--;
console.log(m, n);   // 2, 3


// Section 8: Comparison & Logical (37–39)
//37 Output?
console.log(5 == "5");  //true

//38 Output?
console.log(5 === "5");  //false

//39 Output?
console.log(true && false || true); //true



//🟢 Section 9: Ternary (40)
// 40 Output?
5 > 3 ? console.log("Yes") : console.log("No");  // Yes
