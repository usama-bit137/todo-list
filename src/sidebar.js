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
  const buttonBox = document.createElement("div");
  buttonBox.classList.add("button-box");
  const chronoOrder = document.createElement("button")
  chronoOrder.textContent = "oldest-newest";
  chronoOrder.classList.add("date-order");

  const unorder = document.createElement("button");
  unorder.textContent = "order created";
  unorder.classList.add("unorder");
  
  mainBox.classList.add("mainBox");
  buttonBox.appendChild(chronoOrder);
  buttonBox.appendChild(unorder);
  mainBox.appendChild(buttonBox);
  sideMain.appendChild(mainBox);
  body.appendChild(sideMain);
}
