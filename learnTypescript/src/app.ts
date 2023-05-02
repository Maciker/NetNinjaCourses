import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate";
import { Payment } from "./classes/Payment.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  if (type.value === "invoice") {
    let invoice = new Invoice(
      toFrom.value,
      details.value,
      amount.valueAsNumber
    );
    list.render(invoice, type.value, "end");
  }

  if (type.value === "payment") {
    let payment = new Payment(
      toFrom.value,
      details.value,
      amount.valueAsNumber
    );
    list.render(payment, type.value, "end");
  }
});
