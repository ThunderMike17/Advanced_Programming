function addTwoNumbers(parameter1, parameter2){ 
    return parameter1 + parameter2;
};

const addFullNumbers = function (){
    const numbers = [...arguments] 
    const add = numbers.reduce( function(acc, currentValue, CurrentIndex, array) {
        return acc = acc + currentValue;    
    }, acc = 0) 
    return add;
};

console.log(addFullNumbers(2,4,1,5,10,5,78,6));

function getName(firstName, lastName){
    return `${firstName} ${lastName}`;
}

function sayHello(callback, first, last){
    console.log(`Hello ${callback(first, last)}`);
}

sayHello(getName, "Miguel", "Ceballos");

const arrowFunction = arg1 => arg1*2;  
console.log(arrowFunction(2));