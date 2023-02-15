export default function headerCreate() {
  const body = document.querySelector("body");
  const headerDiv = document.createElement("div");
  
  headerDiv.classList.add("header");
  headerDiv.textContent = "todo?";
  
  body.appendChild(headerDiv);
}
