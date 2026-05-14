//Task 1 — Student Registration Form


const studName = prompt('Enter your Name:')
const studDept = prompt('Enter your Department:')
let studAge = prompt('Enter your Age:')

console.log(`
Welcome ${studName}
Department: ${studDept}
Age: ${studAge}`);


// Task 2 — ATM Withdrawal System

let userAcc = {
    Name: "Ajith",
    Balance: 10000,
    IFSC: "IODB00014"
}
let amt = Number(prompt("Enter Withdrawl amount ..."))
function withdrawl(name, withdrawlAmt) {

    if (name == userAcc.Name) {
        if (withdrawlAmt >= 100 && userAcc.Balance >= withdrawlAmt) {
            console.log("Transaction Successful...");
            console.log(`The available balance is: ${userAcc.Balance-withdrawlAmt}`);
            
        } else {
            console.log("Insufficent Balance ... OR ");
            console.log("Withdrawl Amouunt must be more than 100rs.");
        }
    } else {
        console.error("User does not account in our bank...");
    }

}
 withdrawl("Ajith",amt)


//Task 3 — Swiggy Discount Checker
let orderAmt = 4999;
let discount = orderAmt > 499 ? "Free Delivery Available" : "Delivery Charges Applied"
console.log(discount);



//Task 4 — Instagram Login System

let instagram = {
    userName: "admin",
    passWord: "1234"
}

function instaLogin() {
    let name = prompt("Enter Your Insta User ID...")
    if (name === instagram.userName) {
        let password = prompt("Enter Your Insta PassWord...")
        if (password === instagram.passWord) {
            console.log("Login Success");

        } else {
            console.log("Wrong Password");
        }
    } else {
        console.log("Invalid Username");
    }
}

instaLogin()



//Task 5 — Traffic Signal System

let signal = "red"

switch (signal) {
    case "red": console.log("STOP");

    case "yellow": console.log("READY");

    case "green": console.log("GO");
        break;

    default: console.log("Invalid Input...");
}



//Task 6 — Employee Salary Calculator

function salaryCalculation(salary, bonus) {
    return salary + bonus;
}

let Increment = salaryCalculation(25000, 5000)
console.log(Increment);



//Task 7 — E-Commerce Cart Total

let prices = [100, 200, 300, 400]
let totalPrice = 0;

for (let i = 0; i < prices.length; i++) {

    totalPrice += prices[i];

}
let averagePrice = totalPrice / prices.length;

console.log("Toal Priceis:", totalPrice);
console.log("Average Price is:", averagePrice);




//Task 8 — WhatsApp Contact Book

let user = {
    name : "Ganesh",
    phone : 1234567890,
    status : "Active"
}

for(let key in user){
    console.log(`${key} : ${user[key]}`); 
}




// Task 9 — Movie Ticket Booking

let movie = {
    movieName: "Leo",
    ticketPrice: 200
};

function payment(amount) {

    return `Payment of Rs.${amount} Successful`;
}

function bookTicket(callback, seats) {

    let totalAmount = movie.ticketPrice * seats;

    let bookingDetails = {
        movie: movie.movieName,
        seats: seats,
        total: totalAmount
    };

    console.log(bookingDetails);

    console.log(callback(totalAmount));
}

bookTicket(payment, 3);




// Task 10 — Food Delivery Time Tracker

function* foodDelivery() {

    let stages = ["Order Confirmed","Preparing Food","Out for Delivery","Delivered"];

    for (let stage of stages) {

        yield stage;
    }
}

let order = foodDelivery();

console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);

