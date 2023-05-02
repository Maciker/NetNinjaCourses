import { Invoice } from "../src/classes/Invoice.js";
import { Payment } from "../src/classes/Payment.js";

interface IsPerson {
  name: string;
  age: number;
  speak(message: string): void;
  spend(amount: number): number;
}

const me: IsPerson = {
  name: "Iker",
  age: 27,
  speak(message: string): void {
    console.log(message);
  },
  spend(amount: number): number {
    console.log(`I spent ${amount}`);
    return amount;
  },
};

console.log(me);

const greetPerson = (person: IsPerson) => {
  console.log(`Hello ${person.name}`);
};

console.log(greetPerson(me));

const invOne = new Invoice("Mario", "Work on the Mario website", 250);
const invTwo = new Invoice("Luigi", "Work on the Luigi website", 100);

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

const paymentOne = new Payment("Mario", "Charge for design", 100);

console.log(paymentOne.format());