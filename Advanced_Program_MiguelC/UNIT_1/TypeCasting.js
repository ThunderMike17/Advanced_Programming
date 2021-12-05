var myInt = 24;
var myFloat = 3.1416;
var myString = "Miguel";
var myNull = null;

console.log(typeof myFloat);
myFloat = String(myFloat);
console.log(typeof String(myFloat));

myString = Boolean(myString);
console.log(myString);

console.log(Boolean(" ")); 
    console.log(Boolean("")); 
    console.log(Boolean(0));
    console.log(Boolean(NaN));
    console.log(Boolean(undefined));
    console.log(typeof myNull);
    console.log(Boolean(myNull));
    console.log(Boolean(false));
    console.log(Boolean("Miguel"));
    console.log(Boolean(5));
    console.log(Boolean({key:"5"}));
    console.log(Boolean( [] ));
    console.log(typeof myNull);


    console.log( isNaN(Number("5x")));

    console.log(Number.parseInt(myString));
    console.log(Number.parseFloat(myString));


    var result = "Hola Mundo"; //="Hola" + "Mundo"
    var resultNumberString = 2 + "Hola"; 
    var resultNumberRemainder = 2 - "22"; 
    console.log(resultNumberString);
    console.log(resultNumberRemainder);