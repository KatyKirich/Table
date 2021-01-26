const form = document.querySelector("#form");
const table = document.querySelector("#newTr");
const addBtn = document.querySelector("#add");
const data = [];

const delBtn = document.querySelector("#del");

function addWorker() {
  table.innerHTML=""
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

function getSalary() {
  let bill = document.querySelector("bill");
  bill.innerHTML = `${data.reduce([salary])}`;
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
  let element = document.querySelector("input[type=checkbox]:checked");

  data.slice(element, 1)

  addWorker()
  getSum()

}

delBtn.addEventListener("click", (event) => {
  event.preventDefault();

  delWorker()
  addWorker()
});
