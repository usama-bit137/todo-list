import { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Form from "./Form";
import ActionButton from "./ActionButton";
import done from "../icons/done.svg";

let todosArray = [
  {
    id: 0,
    task: "Chemistry Homework",
    project: "Homework",
    date: "12/12/2023",
    time: "12:00",
    priority: "Hard",
  },
  {
    id: 1,
    task: "Physics Homework",
    project: "Homework",
    date: "12/12/2023",
    time: "12:00",
    priority: "Hard",
  },
  {
    id: 2,
    task: "History Homework",
    project: "Homework",
    date: "12/12/2023",
    time: "12:00",
    priority: "Hard",
  },
];

function App() {
  const [todos, setTodos] = useState(todosArray);

  const [newTodo, setNewTodo] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value, id: todos.length });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  };
  return (
    <>
      <Header />
      <TodoList todos={todos} setTodos={setTodos} />
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        title="Create Todo"
      >
        <ActionButton
          image={done}
          alt="Create todo"
          action={() => {}}
          className="submit"
        >
          Create Todo
        </ActionButton>
      </Form>
    </>
  );
}

export default App;
