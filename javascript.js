// Convert pounds to km
function poundsToKg(value) {
    return value * 0.453592;
}
console.log(poundsToKg(5));
// ArrowFunction
poundsToKg = (value) => value * 0.453592; 
console.log(poundsToKg(2))


// Convert inches to cm
function inchesToCM(value){
    return value * 2.54;
}
console.log(inchesToCM(4))
// ArrowFunction
inchesToCM = (value) => value * 2.54;
console.log(inchesToCM(3))


// Convert ferranine to Celcius
function ferranineToCel(value){
    return (value - 32) * (5/9);
}
console.log(ferranineToCel(4))
//ArrowFunction
ferranineToCel = (value) => (value - 32) * (5/9);
console.log(ferranineToCel(3))



//Convert feet to inches
function feetToInches(value){
    return value * 0.3048;
}
console.log(feetToInches(4))
feetToInches = (value) => value * 0.3048;
console.log(feetToInches(3))