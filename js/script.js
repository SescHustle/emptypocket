let fileHandle;
let expenses = [];

$(document).ready(function () {
  renderExpenses();

  $(".btn-expenses__upload").click(async function () {
    [fileHandle] = await window.showOpenFilePicker();
    let fileData = await fileHandle.getFile();
    let rawExpenses = await fileData.text();
    expenses = JSON.parse(rawExpenses);
    window.localStorage.setItem("expenses", rawExpenses);
    renderExpenses();
  });

  $(".btn-expenses__save").click(async function () {
    saveDB(JSON.stringify(expenses));
  });

  $("button.btn-expenses__add").click(function () {
    this.textContent = this.textContent === "Cancel" ? "Add New" : "Cancel";
    $("form.expenses__add").toggleClass("hidden");
    console.log(new Date().toISOString().slice(0, 10));
    $("#expense-date").val(new Date().toISOString().slice(0, 10));
  });

  $("form.expenses__add").submit(function (e) {
    e.preventDefault();
    $(this).toggleClass("hidden");
    $("button.btn-expenses__add").text("Add New");
    const expense = {
      name: this.querySelector("#expense-name").value,
      date: this.querySelector("#expense-date").value,
      category: this.querySelector("#expense-category").value,
      amount: this.querySelector("#expense-amount").value,
      comment: this.querySelector("#expense-comment").value,
    };
    expenses.push(expense);
    window.localStorage.setItem("expenses", JSON.stringify(expenses));
    renderSingleExpense(expense);
  });
});

const saveDB = async function (data) {
  fileHandle = await window.showSaveFilePicker();
  let stream = await fileHandle.createWritable();
  await stream.write(data);
  await stream.close();
};

const renderExpenses = async function () {
  const data = JSON.parse(window.localStorage.getItem("expenses"));
  if (!data) return;
  expenses = data;
  data.forEach((element) => {
    renderSingleExpense(element);
  });
};

const renderSingleExpense = function (expense) {
  const table = document.querySelector(".expenses__table");
  const markup = `
    <tr class="expenses__row">
        <td class="expenses__column">
            ${expense.date}
        </td>
        <td class="expenses__column">
            ${expense.name}
        </td>
        <td class="expenses__column">
            ${expense.category}
        </td>
        <td class="expenses__column">
            ${expense.amount}
        </td>
        <td class="expenses__column">
            ${expense.comment}
        </td>
    </tr>`;
  table.insertAdjacentHTML("beforeend", markup);
};
