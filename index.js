const form = document.querySelector("form");
const table = document.querySelector("table");
const addBtn = document.querySelector("#add");
const data = [];

const delBtn = document.querySelector("#del");

function addWorker() {
  data.forEach((item) => {
    table.innerHTML += `<tr>
    <td><input type="checkbox" /></td>
    <td>${item.name}</td>
    <td>${item.birth}</td>
    <td>${item.date}</td>
    <td>${item.salary}</td>
  </tr>`;
  });
}

function getSum() {
  let sum = document.querySelector("#sum");
  sum.innerHTML = `${data.length}`;
}

// function getSalary() {
//   let bill = document.querySelector("bill");
//   bill.innerHTML = `${data.reduce(salary)}`;
// }

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const workerName = document.querySelector("#name");
  const workerBirth = document.querySelector("#birth");
  const workerDate = document.querySelector("#workDate");
  const workerSalary = document.querySelector("#salary");

  data.push({
    name: workerName.value,
    birth: workerBirth.value,
    date: workerDate.value,
    salary: workerSalary.value,
  });

  addWorker();
  getSum();
  getSalary();

  form.reset();
});

function delWorker() {
  var element = document.querySelector("input[type=checkbox]:checked");
}

delBtn.addEventListener("click", (event) => {
  event.preventDefault();
});
