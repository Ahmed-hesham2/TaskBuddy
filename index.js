import { showSideBar } from "./sideBar.js";
import { showAddSection } from "./showPopup.js";

const ulList = document.querySelector(".ul-list");
const userInp = document.querySelector("#Task-popup");
const showAddSectionBtn = document.querySelector(".add-new-task");
const sideBarBtn = document.querySelector(".open-side-bar");
const closeBtn = document.querySelector(".close-popup");
const addTaskBtn = document.querySelector(".submit-task");
const delBtn = document.querySelectorAll(".del");

sideBarBtn.addEventListener("click", showSideBar);
showAddSectionBtn.addEventListener("click", showAddSection);
closeBtn.addEventListener("click", showAddSection);
addTaskBtn.addEventListener("click", createLi);

let arr = JSON.parse(localStorage.getItem("data")) || [];

function updateUi() {
  ulList.innerHTML = "";
  arr.forEach((element) => {
    let li = document.createElement("li");
    li.setAttribute("id", element.id);
    li.innerHTML = `  
        <div class="input-box">
            <input type="checkbox" id = "${element.id}" />
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
    li.setAttribute("id", userObj.id);
    li.innerHTML = `  
        <div class="input-box">
            <input type="checkbox" id = "${userObj.id}" />
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
