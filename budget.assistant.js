let startup_name = "Investment Buddy";
let capital = 50000
let revenue = 12000
let expenses = 12000
let cashflow = revenue - expenses;  
let current_balance = capital + cashflow;
let is_profitable = cashflow > 0;

console.log("Startup Name: " + startup_name);
console.log("Cash Flow: " + cashflow);
console.log("Current Balance: " + current_balance);
console.log("Is Profitable: " + is_profitable);