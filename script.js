const btn = document.querySelector(".btn");
const input = document.querySelector(".todo");
const toDoList = document.querySelector(".list");
const totalCount = document.querySelector("span.total");
const completed = document.querySelector(".completed");
let total = 0;
let list = [];

btn.addEventListener("click", () => {
  if (!input.value) {
    return;
  } else {
    list.push(input.value);
    total += 1;
  }
  input.innerHTML = " ";
  totalCount.innerHTML = total;
  displayList();
});

const displayList = () => {
  toDoList.innerHTML += `<input type="checkbox" id = "checkbox"><label for= "checkbox">${input.value}</label>`;
};
