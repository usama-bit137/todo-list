import { useState } from "react";
import Form from "./Form.js";
import ActionButton from "./ActionButton";
import done from "../icons/done.svg";

export default function EditMode({ todo, setTodos, isEdit, setIsEdit }) {
  const [editTodo, setEditTodo] = useState(todo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditTodo({ ...editTodo, [name]: value });
  };

  const handleEdit = () => {
    setIsEdit(() => !isEdit);
  };

  const handleSubmit = (id) => {
    setTodos((todos) => [editTodo, ...todos.filter((item) => item.id !== id)]);
  };

  return (
    <>
      <Form
        onSubmit={() => {
          handleEdit();
          handleSubmit(editTodo.id);
        }}
        onChange={handleChange}
        title={`Edit todo: ${todo.task} `}
        defaultObj={editTodo}
        action={() => {
          return;
        }}
      >
        <ActionButton image={done} imageWidth="12px" alt="Edit Todo">
          Done
        </ActionButton>
      </Form>
    </>
  );
}
