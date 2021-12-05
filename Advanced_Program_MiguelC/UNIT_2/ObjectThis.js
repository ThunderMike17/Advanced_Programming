const student = {
    name: undefined,
    age: undefined,
    greeting: function(message) {
        console.log(`this is equal: ${JSON.stringify(this)}`);
        console.log(`${message} soy ${this.name} y tengo ${this.age}`);
    },
};

const Alex = Object.create(student);
Alex.name = "Alex Mendez";
Alex.age = 20;
Alex.greeting("Hola Mundo");
const Miguel = Object.create(student);
Miguel.name = "Miguel Ceballos";
Miguel.age = 20;
Miguel.greeting("Hello World");
Miguel.programming = function(problem) {

    console.log("Programming solution for", problem);
};

Miguel.programming("Create an amazing Web application");

console.log(this); 