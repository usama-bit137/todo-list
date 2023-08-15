import { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";

let todosArray = [
  {
    task: "Chemistry Homework",
    project: "Homework",
    date: "12/12/2023",
    time: "12:00",
    priority: "Hard",
  },
  {
    task: "Physics Homework",
    project: "Homework",
    date: "12/12/2023",
    time: "12:00",
    priority: "Hard",
  },
  {
    task: "History Homework",
    project: "Homework",
    date: "12/12/2023",
    time: "12:00",
    priority: "Hard",
  },
];

function App() {
  // at the end, remove the todosArray from here:
  const [todos, setTodos] = useState(todosArray);
  return (
    <main className="App">
      <Header />
      <TodoList todos={todos} />

      {/* will set a new State*/}
      <Form todos={todos} setTodos={setTodos} />
    </main>
  );
}

function Form({ todos, setTodos }) {
  let [newTodo, setNewTodo] = useState({});

  // will create create a
  const handleChange = (e) => {
    let { name, value } = e.target;

    setNewTodo({ ...newTodo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  };

  return (
    <form className="form" name="form" onSubmit={handleSubmit}>
      <input
        name="task"
        placeholder="Task"
        type="text"
        onChange={handleChange}
      />
      <input
        name="project"
        placeholder="Project"
        type="text"
        onChange={handleChange}
      />
      <input
        name="date"
        placeholder="date"
        type="date"
        onChange={handleChange}
      />
      <input
        name="time"
        placeholder="Time"
        type="time"
        onChange={handleChange}
      />
      <select name="priority" onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button>Create Todo</button>
    </form>
  );
}

export default App;
