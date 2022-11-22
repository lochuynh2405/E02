let readline = require('readline-sync');
let a = Number(readline.question('nhap so a: '));
let b = Number(readline.question('nhap so b: '));
if(a != 0){console.log(-b/a)}
else if(a == 0){
    if(b == 0){
        console.log("VSN");
    }
    if(b != 0){
        console.log("VN");
    }
}