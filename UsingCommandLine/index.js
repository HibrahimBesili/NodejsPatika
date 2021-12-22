let radius = process.argv.slice(2);

function calculateArea(Radius){
let pi = 3.14;
let area = 1;
area = pi * Radius * Radius ;
console.log(`Yarıçapı ${Radius} olan dairenin alanı : ${area}`);
}

calculateArea(radius[0]);