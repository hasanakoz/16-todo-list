const btn = document.querySelector(".btn");
const input = document.querySelector(".todo");
const toDoList = document.querySelector(".addedToDo");
const totalCount = document.querySelector("span.total");
const completed = document.querySelector(".completed");
let total = 0;
let list = [];
let completedTask = 0;

btn.addEventListener("click", () => {
  if (!input.value) {
    return;
  } else {
    list.push(input.value);
    total += 1;
  }

  displayList();
});

const displayList = () => {
  totalCount.innerHTML = total;
  toDoList.innerHTML += `<li><i class="fa-solid fa-check"></i>${input.value}<i class="fa-solid fa-trash"></i> </li>`;
  console.log(list);
  input.value = "";
  var trash = document.querySelectorAll(".fa-trash");
  trash.forEach((t) => {
    t.addEventListener("click", () => {
      t.parentElement.remove();
      let deleted = t.previousSibling;
      console.log(deleted);
      list.map((i) => {
        if (i == deleted) {
          list.splice(list.indexOf(i), 1);
        }
      });
      console.log(list);

      total -= 1;
      completedTask > 0 && t.parentElement.className == "checked"
        ? (completedTask -= 1)
        : completedTask;
      completed.innerHTML = completedTask;
      totalCount.innerHTML = total;
    });
  });
  let check = document.querySelectorAll(".fa-check");
  check.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.parentElement.className != "checked") {
        item.parentElement.style.textDecoration = "line-through";
        item.parentElement.className = "checked";
        completedTask += 1;
        completed.innerHTML = completedTask;
      } else {
        item.parentElement.style.textDecoration = "none";
        item.parentElement.className = "";
        completedTask -= 1;
        completed.innerHTML = completedTask;
      }
    });
  });
};
