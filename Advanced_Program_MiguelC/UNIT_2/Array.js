var myArray = [1,2,3,4,5];

const ln = myArray.length;
console.log(ln);
console.log(myArray);

for(let i = 0; i<ln; i++){
    console.log(myArray[i]);
    };
    console.log("---");
    for(let i in myArray){
    console.log(myArray[i]);
    };
    console.log("---");
    for(let i of myArray){
    console.log(myArray[i]);
    }
    

    let data = [];
    console.log(data);
    const temp = 27;
    data.push(temp);
    data.push(12);
    data.push(60);
    console.log(data);
    console.log(data);
    data.splice(2,0, 3, 4);   
    console.log(data);
    data.pop();     
    console.log(data);
    data.shift();   
    console.log(data);
    
    data.splice(1,3, 500); 
    console.log(data);
    
    
var friends = ["Axel", "Gio", "Jared"];
var bestFriend = friends.slice(1); 
console.log(friends);
console.log(bestFriend);
var edades = [20, 22, 23, 24];
edades = edades.map(function (currentValue, index) {
    return currentValue - 2;

})
