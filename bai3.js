let readline = require('readline-sync');
let tuduy = Number(readline.question('nhap tu duy: '));
let laptrinh = Number(readline.question('nhap lap trinh: '));
let dtb = (tuduy + laptrinh)/2;
if (dtb >= 5){console.log('dau')}
else {console.log('rot')};