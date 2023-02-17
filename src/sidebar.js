const body = document.querySelector("body");
const sideMain = document.createElement("div");
sideMain.classList.add("sideMain");

export function sidebarCreate() {
  
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  sidebar.textContent = "Welcome, Usama";
  // children of this thing. 
  
  sideMain.appendChild(sidebar);
  body.appendChild(sideMain);
}

export function mainCreate() {
  const mainBox = document.createElement("div");
  mainBox.classList.add("mainBox");

  sideMain.appendChild(mainBox);
  body.appendChild(sideMain);
}
