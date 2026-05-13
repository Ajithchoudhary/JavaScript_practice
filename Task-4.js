// Task 1 — Basic Function
// Create a function called welcomeUser.

function welcomeUser(name) {
    console.log(`Welcome ${name}`);

}

welcomeUser("Naveen")

// Task 2 — Parameter + Return
// Create a function squareNumber.

function squareNumber(num) {
    return num * num;
}
console.log(squareNumber(5));

// Task 3 — Object Function
let employee = {
    name: "Rahul",
    salary: 50000
}

function employeeBonus(bonus) {
    console.log(employee.name);
    console.log(employee.salary + bonus);
}
employeeBonus(5000)


// Task 4 — Scope Checking
// Inside a function:
// Create var
// Create let
// Create const

function fun() {
    if (true) {
        var a = 10;
        let b = 10;
        const c = 10;
    }

    console.log(a);  //this will print the value , bcoz VAR is a Global Scope
    console.log(b);  //This will caught error as : Reference Error: b not defined 
    console.log(c);   //This will caught error as : Reference Error: c not defined 
}
// fun()

// Task 5 — Arrow Function
// Convert this into arrow function:
// function add(a,b){
//    console.log(a+b);
// }

var add = (a, b) => {
    console.log(a + b);
}
add(10, 20);


function calculator(callback, a, b) {
    callback(a, b)

}
function multiply(num1, num2) {
    console.log(num1 * num2);

}

calculator(multiply, 5, 2);


//Task 7 — Generator Function

function* offers() {
    yield "50% OFF"
    yield "Free Delivery"
    yield "Cashback"
}

let offer = offers()

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);



// Task 8 — Default Parameter

let student = function (name, course = "JavaScript") {

    let stdDetails = {
        Name: name,
        Course: course
    }
    console.log(stdDetails);

}

student("Naveen")
student("Praveen", "Data Science")
student("Naresh M")



// Task 9 — Currying
// Create currying function for multiplication.

function multi(a) {
    return function (b) {
        return function (c) {
            return a * b * c
        }
    }
}

console.log(multi(2)(3)(4));


// Task 10 — Spread Operator
// Merge these arrays:
// [1,2,3]
// [4,5,6]

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let array = [...arr1, ...arr2]

console.log(array);



// Task 11 — Object Spread
// Merge two objects:
// {name:"Navi"}
// {role:"Developer"}

let obj1 = {
    name: "Navi",
}
let obj2 = {
    role: "Developer"
}

let object3 = {
    ...obj1, ...obj2
}
console.log(object3);




// Task 12 — Rest Operator
// Create function:
// numbers(...num)
// Requirements: Print all numbers  , Print total sum

function numbers(...num) {
    console.log(num);

    let sum = 0;
    for (let number of num) {
        sum += number;
    }
    console.log(sum);
}
numbers(1, 2, 3, 4)




// Mini Challenge 🔥
// Create one small Student Management System using:


let students = [];  // this array store students data

function addStudent(name,Dept, marks) {  
    let student = {
        name: name,
        dept: Dept,
        marks: marks
    }; 
    students[students.length] = student;  // this line add the object's in array
    console.log(`${student.name} Data is ADDED SUCCESSFULLY...`);
    
}

function bonus(mark) {
    return mark + 15;
}

function updateMarks(callback) {

    for (let student of students) {

        let updatedStudent = {
            ...student,
            marks: callback(student.marks)
        };

        student.marks = updatedStudent.marks;
    }
}

function totalMarks(...marks) {

    let sum = 0;

    for (let mark of marks) {
        sum += mark;
    }
    return sum;
}

addStudent("Ajith","CSE", totalMarks(80, 90, 70));
addStudent("Navi","ECE", totalMarks(85, 95, 90));
addStudent("Ganesh","MECH",totalMarks(79,94,97))

updateMarks(bonus)

console.log(students);
