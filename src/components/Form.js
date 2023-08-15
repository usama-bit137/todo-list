import { useState } from "react";
import "../styles/Form.css";

function Form({ todos, setTodos }) {
  let [newTodo, setNewTodo] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;

    setNewTodo({ ...newTodo, [name]: value, id: todos.length });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  };

  return (
    <form className="form" name="form" onSubmit={handleSubmit}>
      <h3 className="call-to-action">Add a new Todo:</h3>

      <div className="form--grid--container">
        <div className="form--title">Task: </div>
        <input
          name="task"
          placeholder="Task"
          type="text"
          onChange={handleChange}
          required
        />
        <div className="form--title">Project: </div>
        <input
          name="project"
          placeholder="Project"
          type="text"
          onChange={handleChange}
          required
        />
        <div className="form--title">Date Due: </div>
        <input name="date" type="date" onChange={handleChange} required />
        <div className="form--title">Time Due: </div>
        <input name="time" type="time" onChange={handleChange} required />
        <div className="form--title">Priority: </div>
        <select name="priority" onChange={handleChange} required>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button id="submit">Create Todo</button>
    </form>
  );
}

export default Form;
