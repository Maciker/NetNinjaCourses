const character = "mario";

console.log(character);

let names = ["Mario", "Luigi", "Yoshi"];

names.push("Toad");

let numbers = [10, 20, 30, 40];

numbers.push(50);

let mixed = [1, "Iker", true];

mixed.push(10);
mixed.push("Asier");

console.log(mixed);

let ninja = {
  name: "Mario",
  blet: "black",
  age: 30,
};

ninja.age = 40;

console.log(ninja);

// explicit types
let characterName: string;
let characterAge: number;
let isLoggedIn: boolean;

characterName = "Iker";
characterAge = 37;
isLoggedIn = true;

let ninjas: string[] = [];

ninjas = ["Iker", "Erku"];

let mixedData: (string | number)[] = [];

mixedData = [10, "kids"];

console.log(mixedData);

let employee: {
  name: string,
  age: number,
  salary: number,
};

// Any type

let age: any = 25;

age = true;

console.log(age);

age = {yearBorn: 1985};
