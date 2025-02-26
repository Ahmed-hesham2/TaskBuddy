import { showSideBar } from "./sideBar.js";
import { showAddSection } from "./showPopup.js";
import { randomQuote } from "./randomQuote.js";

const ulList = document.querySelector(".ul-list");
const userInp = document.querySelector("#Task-popup");
const showAddSectionBtn = document.querySelector(".add-new-task");
const sideBarBtn = document.querySelector(".open-side-bar");
const closeBtn = document.querySelector(".close-popup");
const addTaskBtn = document.querySelector(".submit-task");

const checkbox = document.querySelectorAll("check");

sideBarBtn.addEventListener("click", showSideBar);
showAddSectionBtn.addEventListener("click", showAddSection);
closeBtn.addEventListener("click", showAddSection);
addTaskBtn.addEventListener("click", createLi);

let arr = JSON.parse(localStorage.getItem("data")) || [];

function updateUi() {
  ulList.innerHTML = "";
  arr.forEach((element) => {
    let li = document.createElement("li");
    li.setAttribute("data-li-id", element.id);
    li.innerHTML = `  
        <div class="input-box">
            <input type="checkbox" class = "check" data-checkbox-id = "${element.id}" />
            <h2>${element.value}</h2>
          </div>
          <div class="buttons">
            <button class="del" data-task-id ="${element.id}">Del</button><button class="edit">Edit</button>
          </div>`;
    ulList.appendChild(li);
  });
}

updateUi();

function createLi() {
  if (userInp.value === "") {
    return;
  } else {
    let userObj = {
      value: userInp.value,
      id: Date.now(),
    };
    let li = document.createElement("li");
    li.setAttribute("data-li-id", userObj.id);
    li.innerHTML = `  
        <div class="input-box">
            <input type="checkbox" class = "check" data-checkbox-id = "${userObj.id}" />
            <h2>${userObj.value}</h2>
          </div>
          <div class="buttons">
            <button class="del" data-task-id = "${userObj.id}">Del</button><button class="edit">Edit</button>
          </div>`;
    ulList.appendChild(li);
    userInp.value = "";
    arr.push(userObj);
    localStorage.setItem("data", JSON.stringify(arr));

    showAddSection();
  }
}

ulList.addEventListener("click", function (event) {
  if (event.target.classList.contains("del")) {
    let taskId = event.target.dataset.taskId;
    taskId = Number(taskId);
    arr = arr.filter((e) => {
      return e.id !== taskId;
    });
    localStorage.setItem("data", JSON.stringify(arr));
    ulList.innerHTML = "";
    updateUi();
  }
});
ulList.addEventListener("click", function (event) {
  if (event.target.classList.contains("check")) {
    let taskId = event.target.dataset.checkboxId;
    taskId = Number(taskId);
    let targetLi = document.querySelector(`[data-li-id = "${taskId}"]`);
    targetLi.classList.toggle("checked");
  }
});

window.addEventListener("keydown", (e) => {
  e.key === "Enter" ? createLi() : null;
});
console.log(randomQuote());
