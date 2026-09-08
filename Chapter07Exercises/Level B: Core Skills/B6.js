// B6. Using the orders array of Section 7.8: 
// total pending amount; "customer — amount" lines for paid 
// orders; and mark order 2 paid immutably.

const orders = [
  { id: 1, customer: "Asha",  amount: 450,  status: "paid" },
  { id: 2, customer: "Rafi",  amount: 1200, status: "pending" },
  { id: 3, customer: "Mim",   amount: 300,  status: "paid" },
  { id: 4, customer: "Sadia", amount: 800,  status: "paid" }
];

const pending_amount = orders.filter((o) => o.status == "pending")
    .reduce((sum, o) => sum + o.amount, 0);
console.log(pending_amount);

const paid_lines = orders.filter((o) => o.status == "paid")
    .map((o) => `${o.customer} - ${o.amount}`);
console.log(paid_lines);

const update_orders = orders.map((o) => o.id === 2 ? {...o, status: "paid"} : o);
console.log(update_orders);
