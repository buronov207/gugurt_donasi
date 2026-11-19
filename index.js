const fs = require('fs');
let n = Number(fs.readFileSync('input.txt', 'utf8'));

const gugurt = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
let javob = 0;
if (n === 0) {
    javob = 6;
}
while (n > 0) {
    let raqam = n % 10;
    javob = javob + gugurt[raqam];
    n = Math.floor(n / 10);
}
console.log(javob);