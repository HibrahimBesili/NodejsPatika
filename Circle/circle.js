function circleCircumference (radius){
    let pi = 3.14;

    console.log("Dairenin Çevresi : ",2*pi*radius);
}

function circleArea (radius){
    let pi = 3.14;
    console.log("Dairenin Alanı : ",2*pi*radius*radius);
}

module.exports = {
    circleArea,
    circleCircumference
}