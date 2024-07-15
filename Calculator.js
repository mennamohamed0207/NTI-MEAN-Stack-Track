function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
let displayedValue = 0;
let number=0;
function calculator(a,b,operation) 
{
    let result;
    console.log(a,b,operation);
if (operation == "+") {
    result=add(a, b);
    
} else if (operation == "-") {
    result=sub(a, b);
} else if (operation == "*") {
    result=mul(a, b);
} else if (operation == "/") {
    result=div(a, b);
}
return result;
}