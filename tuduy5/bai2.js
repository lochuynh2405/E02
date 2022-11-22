let readline = require('readline-sync');
let a = Number(readline.question('nhap so a: '));
let b = Number(readline.question('nhap so b: '));
let c = Number(readline.question('nhap so c: '));
let delta = b * b - 4 * a * c;

if(delta > 0){
    console.log("Phương trình tồn tại 2 nghiệm:");
    console.log('x1 = '+ (-b + Math.sqrt(delta) / (2 * a)));
    console.log('x2 = '+ (-b - Math.sqrt(delta) / (2 * a)));
}
else if (delta == 0){
    console.log("Phương trình có nghiệm kép: x = " + -b / (2 * a));
}
else {
    console.log("Phương trình đã cho vô nghiệm.");
}