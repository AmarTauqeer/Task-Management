import React, { useState } from "react";
import "./TodoList.css";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const handleClick = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    console.log(newTodos);
    setTodos(newTodos);
  };
  return (
    <div className="Todo-list">
      <TodoForm addTodo={addTodo} />

      {todos.map((todo, index) => (
        <div key={index}>
          <div className="row" style={{ height: "40px", marginTop: "3px" }}>
            <div className="col-sm-3">
              <span className={todo.isCompleted ? "strike-through" : ""}>
                {todo.text}
              </span>
            </div>
            <div
              className="col-sm-3"
              style={{ textAlign: "right", height: "40px" }}
            >
              <input
                type="button"
                value="complete"
                className="lineThrough"
                onClick={() => completeTodo(index)}
              />
              <button
                className="deleteButton"
                onClick={() => handleClick(index)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
