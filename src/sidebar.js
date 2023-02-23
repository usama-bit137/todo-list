const body = document.querySelector("body");
const sideMain = document.createElement("div");
sideMain.classList.add("sideMain");

export function sidebarCreate() {
  
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  sidebar.textContent = "Welcome, Usama";
  
  sideMain.appendChild(sidebar);
  body.appendChild(sideMain);
}

export function mainCreate() {
  const mainBox = document.createElement("div");
  const chronoOrder = document.createElement("button")
  chronoOrder.textContent = "chronological order";
  chronoOrder.classList.add("date-order");
  
  mainBox.classList.add("mainBox");
  mainBox.appendChild(chronoOrder);
  sideMain.appendChild(mainBox);
  body.appendChild(sideMain);
}
