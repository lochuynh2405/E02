let readline = require('readline-sync');
let x = Number(readline.question('nhap x: '));
let dvt = ' đồng';
if (x < 100){console.log((x * 2000) + dvt)}
else if (x < 200){console.log((x * 2500) + dvt)}
else {console.log((x*3500) + dvt)};
