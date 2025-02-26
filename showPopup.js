const popup = document.querySelector(".pop-box");
const inp = document.querySelector("#Task-popup");

export function showAddSection() {
  popup.classList.toggle("active");
  inp.focus();
}
