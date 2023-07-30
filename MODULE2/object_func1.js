//Creating an object using object literal notation
const person = {
    firstName: "Albert ",
    lastName: "Eingstein",
    age: 30,
    occupation:"scientist",
    //Method inside the object
    sayHello:function() {
        console.log(`Hello,my name is ${this.firstName}
        ${this.lastName}. I am ${this.age}years old.`);
    }};
//Accessing object properties using dot notation
console.log(person.firstName); //Output: Abert
console.log(person.lastName); //Output:Eingstein 
console.log(person.age); //Output:30
console.log(person.occupation); //Output:scientist
person.sayHello();//Output: Hello,my name is Albert Eingstein , I am 30 years old