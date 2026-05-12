//1. Print Numbers
//Print numbers from 1 to 20 using a for loop.

for (let one = 1; one <= 20; one++) {
    console.log(one);

}

//2. Odd Numbers
//Print all odd numbers from 1 to 50.
for (let two = 1; two <= 50; two++) {
    if (two % 2 == 1) {
        console.log("Odd Numbers:", two);
    }
}

//3. Multiplication Table
//Print the multiplication table of 7.
for (let three = 1; three <= 12; three++) {
    console.log(`7 x ${three} = ${7 * three}`);    //Or     console.log("7 x ",three," =", 7*three);
}

//4. Reverse Counting
//Using while loop, print numbers from 20 to 1.
let four = 20;
while (four > 0) {
    console.log("Reverse counting:", four);
    four--
}

//5. Sum of Numbers
//Find the total sum of numbers from 1 to 100.
let sum = 0;
for (let five = 1; five <= 100; five++) {
    sum += five;
}
console.log("Sum of 1 to 100:", sum);

//6. Array Loop
//Loop through this array and print all values.
let fruits = ["apple", "banana", "orange", "grapes"]

for (let arr of fruits) {
    console.log("Values of array:", arr);

}


//7. Count Even Numbers
//Count how many even numbers are present between 1 to 50.

let count = 0;
for (let even = 1; even <= 50; even++) {
    if (even % 2 == 0) {
        count++
    }
}
console.log("Even number present from 1 to 50:", count);


//8. Star Pattern
//Print this pattern using loops:
// *
// **
// ***
// ****
// *****
for (let row = 1; row <= 5; row++) {
    let pattern = "";
    for (let col = 1; col <= row; col++) {
        pattern += "*";
    }
    console.log(pattern);
}


//Functions
// 9. Simple Function
// Create a function named welcome() that prints: Welcome to JavaScript

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();   //this will call the function for execution... and prints it 


//10. Function with Parameter
//Create a function that accepts a name and prints: Hello Naveen

function greet(Name) {
    console.log(`Hello ${Name}`);
}

greet("Naveen");



//11. Add Two Numbers
//Create a function that takes 2 numbers and returns the addition.

function addTwoNum(num1, num2) {
    return num1 + num2;
}

let add = addTwoNum(10, 20);
console.log(`Addition of two numbers: ${add}`);


//12. Salary Bonus
// Create a function that adds bonus to employee salary.
// Example:
// salary = 50000
// bonus = 5000
// Output: 55000


function employee(salary, bonus) {

    let emp = {
        salary: salary,
        bonus: bonus,
        total: salary + bonus
    };

    console.log(emp.total);
}

employee(50000, 5000);


// 13. Object Loop
// Print all keys and values using for in.
let student = {
    name: "Rahul",
    course: "JavaScript",
    marks: 95
}

for (let arr in student) {
    console.log(`${arr}: ${student[arr]}`);
}



// 14. Find Largest Number
// Create a function to find the largest number between two values.
// Example:
// largest(10,50)
// Output:
// 50

function largestTwoNum(num1, num2) {
    if (num1 > num2) {
        console.log(`largest number between two values is:  ${num1}`);
    } else {
        console.log(`largest number between two values is: ${num2}`);

    }
}

largestTwoNum(10, 50)


//15. Mini Employee Task
function Employee(name, Dept, salary, salAfterBonus) {
    let obj = {
        EmployeeName: name,
        Department: Dept,
        Salary: salary,
        SalaryWithBonus: salAfterBonus + salary
    }
    console.log(obj);

}

Employee("Ajith", "CSE", 50000, 4500);
