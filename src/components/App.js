import { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import Form from "./Form";

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
  // at the end, remove the todosArray from here:
  const [todos, setTodos] = useState(todosArray);
  return (
    <main className="app">
      <Header />
      <TodoList todos={todos} setTodos={setTodos} />
      <Form todos={todos} setTodos={setTodos} />
    </main>
  );
}

export default App;
