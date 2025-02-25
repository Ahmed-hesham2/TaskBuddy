const sideBarBtn = document.querySelector(".open-side-bar");

export function showSideBar() {
  let html =
    sideBarBtn.innerHTML === '<i class="fa-solid fa-x"></i>'
      ? '<i class="fa-solid fa-bars"></i>'
      : '<i class="fa-solid fa-x"></i>';
  sideBarBtn.innerHTML = html;
  let sideBar = document.querySelector(".side-bar");
  if (sideBar.style.opacity === "1") {
    sideBar.style.opacity = "0";
    sideBar.style.transform = "translateX(-100%)";
  } else {
    sideBar.style.opacity = "1";
    sideBar.style.transform = "translateX(0)";
  }
}
