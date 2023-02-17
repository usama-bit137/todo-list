/* eslint-disable guard-for-in */
export default function formCreate(){
  const mainBox = document.querySelector(".mainBox");
  const formElement = document.createElement("form"); 
 
  formElement.classList.add("form-grid");
  
  // title:
  const labelTitle = document.createElement("label");
  labelTitle.setAttribute ("for", "title");
  labelTitle.textContent = "title:";
  labelTitle.classList.add("title-element");
  formElement.appendChild(labelTitle);

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("type", "text");
  inputTitle.classList.add("title-element");
  inputTitle.classList.add("input-box");
  formElement.appendChild(inputTitle);

  // date: 
  const labelDate = document.createElement("label");
  labelDate.setAttribute ("for", "date");
  labelDate.textContent = "due date:";
  labelDate.classList.add("date-element");
  formElement.appendChild(labelDate);

  const inputDate = document.createElement("input");
  inputDate.setAttribute("type", "date");
  inputDate.classList.add("date-element");
  inputDate.classList.add("input-box");
  formElement.appendChild(inputDate);

  // time: 
  const labelTime = document.createElement("label");
  labelTime.setAttribute ("for", "time");
  labelTime.textContent = "time:";
  labelTime.classList.add("time-element");
  formElement.appendChild(labelTime);

  const inputTime = document.createElement("input");
  inputTime.setAttribute("type", "time");
  inputTime.classList.add("time-element");
  inputTime.classList.add("input-box");
  formElement.appendChild(inputTime);

  // priority:
  const labelPriority = document.createElement("label");
  labelPriority.setAttribute ("for", "date");
  labelPriority.textContent = "priority:";
  labelPriority.classList.add("priority-element");
  formElement.appendChild(labelPriority);

  // priority radio buttons:
  const radioBox = document.createElement("div");
  radioBox.setAttribute("id", "radio-button-box");
  const radioOptions = ["low", "medium", "high"];

  // eslint-disable-next-line no-restricted-syntax
  for (const item in radioOptions) {
    const label = document.createElement("label");
    label.textContent = radioOptions[item];
    const input = document.createElement("input");
    input.setAttribute("type", "radio"); 
    input.setAttribute("name", "priority");
    label.appendChild(input);
    radioBox.appendChild(label);
    label.classList.add("radio-button")
  }

  formElement.appendChild(radioBox);

  // button:
  const createButton = document.createElement("button");
  createButton.textContent = "create todo";
  formElement.appendChild(createButton);
  
  mainBox.appendChild(formElement);
}
