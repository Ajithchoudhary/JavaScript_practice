// 1. API Task - User Names Uppercase

// API:
// https://jsonplaceholder.typicode.com/users

// Fetch all users.
// Use map()
// Convert all usernames to UPPERCASE.

// Print new array.


let api1 = "https://jsonplaceholder.typicode.com/users"

fetch(api1).then((response)=>{
    
    return response.json()
})
.then((jsData)=>{

    console.log(jsData);
    
     let upperCaseData = jsData.map((c,i,t)=>{
        return c.username.toUpperCase();
    })
    console.log(upperCaseData);
    
})
.catch((error)=>{
    console.log(error.message);
    
})
.finally(()=>{
    console.log("User Name are converted into UPPERCASE");
})





// 2. API Task - Expensive Products

// API:
// https://fakestoreapi.com/products

// Fetch products.

// Use filter()
// Print products price greater than 100.

let api2 = "https://fakestoreapi.com/products"

fetch(api2)
.then((response)=>{

    
    return response.json()
})
.then((products)=>{
 
    console.log("Raw data's of the products");
    
    console.log(products);
    
    let prod =  products.filter((product)=>{

        return product.price > 100

    })
    console.log(prod);
    
})
.catch((error)=>{

    console.log(error.message);
    
})
.finally(()=>{
    console.log("Product's price is greater than 100 is listed Successfully");
    
})




// 3. Date Concept Task - Digital Clock

// Create one Date object.

// Print:
// current hours
// current minutes
// current seconds

// Output Example:
// 10 : 45 : 30


let data =new Date();

let currentHour = data.getHours();
let currentMinute = data.getMinutes();
let currentSecond = data.getSeconds();

console.log(`Current time is : ${currentHour} : ${currentMinute} : ${currentSecond}`);





// 4. String Concept Task - Username Checker

// Create one string:
// "   Naveen Kumar   "

// Remove spaces using trim().

// Convert into uppercase.

// Check string includes "KUMAR".

// Print final output.

let str = " Naveen kumar "
str.trim()
str = str.toUpperCase()
console.log(str.includes("KUMAR"));




// 5. Array Concept Task - Student Rank System

// Create one array:
// [450, 300, 700, 200, 900]

// Sort marks high to low.

// Print top 3 marks only using slice().



let arr = [450, 300, 700, 200, 900];

arr = arr.sort((min,max)=>{

    return max-min
})
console.log(arr);

console.log(`The first three value is: ${arr.slice(0,3)}`);



