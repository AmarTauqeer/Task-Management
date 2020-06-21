import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Task Management</h3>
        <input
          type="text"
          id="task"
          value={value}
          placeholder="Enter new task"
          onChange={handleChange}
          style={{ width: "340px" }}
        />
        <input
          type="submit"
          id="submit"
          className="fill"
          value="Add"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default TodoForm;
