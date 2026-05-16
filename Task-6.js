// 5 Real-Time JavaScript Questions

// 1. Student Attendance System
// Create two arrays:
// presentStudents
// absentStudents
// Merge both arrays using spread operator
// Add one new student at last
// Print final array


let presentStudents = ["Ajith", "Balaji", "Boominathan", "Allen"];
let absendStudents = ["Vinoth", "Vikram", "Sudhakar"];

let totalStudents = [...presentStudents, ...absendStudents]

console.log(totalStudents);
//adding new student at last...

totalStudents.push("Priyan");
console.log(totalStudents);


// 2. E-Commerce Cart
// Create object for mobile details
// Create another object for charger details
// Merge both objects using spread operator
// Add deliveryDate property
// Print final object

let mobileDetails = {

    brand: "OnePlus",
    model: "12R",
    displaySize: "17.22",
    processor: "Snapdragon 4 Gen 2",
    ram: "6GB",
    storage: "128GB",
    battery: "5000mAh"
}

let chargerDetails = {

    type: "Fast Charger",
    power: "18W",
    cableType: "USB Type-C"

}

let finalMobile = {
    ...mobileDetails, ...chargerDetails
}
console.log(finalMobile);

finalMobile.deliveryDate = "22-05-2026";





// 3. Food Delivery App
// Create function named orderFood()
// Accept multiple food items using rest operator
// Print:
// Total items ordered
// First item
// Last item
let foodItems = [];

function orderFood(...Items) {

    foodItems = [...Items];

    console.log(`First Item : ${foodItems[0]}`);

    console.log(`Last Item : ${foodItems[foodItems.length - 1]}`);
}

orderFood("Curd Rice","Hyderabad Biriyani","Pizza","Burger","Shawarma","French Fries","Sandwich","Chicken Rice","Mojito");

console.log(`Total Items ordered: ${foodItems.length} and the items are :`);

foodItems.forEach((currentElement) => {

    console.log(currentElement);

});


// 4. Employee Salary Filter
// Create array of employee objects
// Filter employees whose salary is above 50000
// Print filtered employees

let employee = [{ name: "Venkat", role: "Frontend Developer", salary: 40000 },
{ name: "Vel", role: "Frontend Developer", salary: 45000 },
{ name: "Karthick", role: "Python Developer", salary: 55000 },
{ name: "Deva", role: "Java Developer", salary: 68000 },
{ name: "Naresh", role: "Backend Developer", salary: 80000 },
{ name: "Aarthi", role: "Software Developer", salary: 140000 },
{ name: "Aravind", role: "Software Developer", salary: 100000 }

]

let employeeSalary = employee.filter((c, i, t) => {

    return c.salary > 50000;

})
console.log(employeeSalary);



// 5. Online Game Score Board
// Create array of scores
// Use reduce()
// Find total score of all players
// Print final total


let scores = [4, 8, 3, 7, 1, 9.5] //scores out of 10

let finalScore = scores.reduce((acc, c, i, t) => {
    return acc + c
})

console.log(finalScore);
