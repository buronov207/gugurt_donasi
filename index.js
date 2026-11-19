// robocontest.uz gugurt masalasi

// const fs = require('fs');
// let n = Number(fs.readFileSync('input.txt', 'utf8'));

// const gugurt = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
// let javob = 0;
// if (n === 0) {
//     javob = 6;
// }
// while (n > 0) {
//     let raqam = n % 10;
//     javob = javob + gugurt[raqam];
//     n = Math.floor(n / 10);
// }
// console.log(javob);





// vazifa.md faylidagi masalalar.
// 1-masala

// const user = {
//     username: "admin",
//     password: "12345"
// };
// function login(user, username, password) {
//     if (user.username === username && user.password === password) {
//         return "Login successful";
//     } else {
//         return "Invalid username or password";
//     }
// }
// console.log(login(user, "admin", "12345"));


// 2-masala

// const account = {
//     owner: "Ali",
//     balance: 500
// };
// function withdraw(account, amount) {
//     if (amount <= account.balance) {
//         account.balance -= amount;
//         return account.balance;
//     } else {
//         return "Insufficient balance";
//     }
// }
// console.log(withdraw(account, 200));
// console.log(withdraw(account, 400));


// 3-masala

// const employee = {
//     name: "Vali",
//     salary: 500,
//     experience: 3
// };
// function calculateSalary(employee) {
//     if (employee.experience >= 3) {
//         return employee.salary + employee.salary * 0.2;
//     } else {
//         return employee.salary;
//     }
// }
// console.log(calculateSalary(employee));