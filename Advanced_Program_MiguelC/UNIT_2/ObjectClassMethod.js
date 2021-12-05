const student = {
    name: "Miguel",
    age: 20,
    greeting: function(message) {
        console.log(`this is equal: ${JSON.stringify(this)}`);
        console.log(`${message} soy ${this.name} y tengo ${this.age}`);
    },
};

const cpyStudent = Object.assign(student); 
cpyStudent.name = "Alex";
console.log(student);
console.log(cpyStudent);
 