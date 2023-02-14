export default function sidebarCreate() {
  const body = document.querySelector("body");
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  sidebar.textContent = "Welcome, Usama";
  // children of this thing. 

  body.appendChild(sidebar);
}
