let readline = require('readline-sync');
let a = readline.question('nhap canh a: ');
let b = readline.question('nhap canh b: ');
let c = readline.question('nhap canh c: ');
if (a*a + b*b == c*c || c*c + b*b == a*a || a*a + c*c == b*b ) { console.log("yes"); }
else { console.log("no"); };