const balance = document.querySelector("#balance");
const inc_amt = document.querySelector("#inc-amt");
const exp_amt = document.querySelector("#exp-amt");
const trans = document.querySelector("#trans");
const form = document.querySelector("#form");
const description = document.querySelector("#desc");
const amounts = document.querySelector("#amount");

// ✅ Consistent property name: "amount"
/*
const dummyData = [
  { id: 1, description: "Flower", amount: -200 },
  { id: 2, description: "Salary", amount: 300 },
  { id: 3, description: "Book", amount: -10 },
  { id: 4, description: "Camera", amount: 150 },
  { id: 5, description: "Petrol", amount: -250 },
];

let transactions = dummyData;
*/
const localStorageTrans=JSON.parse(localStorage.getItem("exp_inc"))
let transactions = JSON.parse(localStorage.getItem("exp_inc") || "[]");

function loadTransactionDetails(transaction) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const item = document.createElement("li");
  item.classList.add(transaction.amount < 0 ? "exp" : "inc");

  item.innerHTML = `
    ${transaction.description}
    <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="btn-del" onclick="removeTrans(this, ${transaction.id})">x</button>
  `;
  trans.appendChild(item);
}

function removeTrans(buttonElement, id) {
  if (confirm("Are you sure you want to delete Transaction?")) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    buttonElement.parentElement.remove();
    updateAmount();
    updateLocalStorage();
  }
}

function updateAmount() {
  const amountsArray = transactions
    .map(t => t.amount)
    .filter(a => !isNaN(a)); // ✅ Ignore invalid numbers

  const income = amountsArray.filter(a => a > 0).reduce((acc, a) => acc + a, 0);
  const expense = amountsArray.filter(a => a < 0).reduce((acc, a) => acc + a, 0);

  const total = income + expense; // expense is negative
  balance.innerText = `₹${total.toFixed(2)}`;
  inc_amt.innerText = `₹${income.toFixed(2)}`;
  exp_amt.innerText = `-₹${Math.abs(expense).toFixed(2)}`;
}

function config() {
  trans.innerHTML = "";
  transactions.forEach(loadTransactionDetails);
  updateAmount();
}

function addTransaction(e) {
  e.preventDefault();

  const amountValue = +amounts.value;

  if (description.value.trim() === "" || isNaN(amountValue)) {
    alert("Please enter a valid description and amount");
    return;
  }

  const transaction = {
    id: uniqueId(),
    description: description.value,
    amount: amountValue, // ✅ use "amount"
  };

  transactions.push(transaction);
  loadTransactionDetails(transaction);
  updateAmount();
  updateLocalStorage();

  description.value = "";
  amounts.value = "";
}

function uniqueId() {
  return Math.floor(Math.random() * 100000000);
}

form.addEventListener("submit", addTransaction);
window.addEventListener("load", config);

function updateLocalStorage(){
    localStorage.setItem("exp_inc",JSON.stringify(transactions));
}
