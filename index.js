const form = document.querySelector("form");
const table = document.querySelector("table");
const addBtn = document.querySelector("#add");

function addWorker() {
  const workerName = document.querySelector("#name");
  const workerBirth = document.querySelector("#birth");
  const workerDate = document.querySelector("#workDate");
  const workerSalary = document.querySelector("#salary");
  table.innerHTML += `<tr>
    <td><input type="checkbox" /></td>
    <td>${workerName.value}</td>
    <td>${workerBirth.value}</td>
    <td>${workerDate.value}</td>
    <td>${workerSalary.value}</td>
  </tr>`;
}

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  addWorker();
  form.reset();
});
