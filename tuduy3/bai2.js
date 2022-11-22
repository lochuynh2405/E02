let readline = require('readline-sync');
let a = readline.question('nhap canh a: ');
let b = readline.question('nhap canh b: ');
let c = readline.question('nhap canh c: ');
if (a == b || a == c || b == c) { console.log("yes"); }
else { console.log("no"); };

