import React, { useState } from "react";

interface propType {
  addTodo: Function;
}

function AddTodo(props: propType) {
  const [task, setTask] = useState("");

  const onTaskChange = (e) => {
    setTask(e.target.value);
  };

  const onAddButtonDown = (e) => {
    if (task !== "") {
      props.addTodo(task);
      e.target[0].value = "";
      setTask("");
    }
    e.preventDefault();
  };
  return (
    <form onSubmit={onAddButtonDown}>
      <input onInput={onTaskChange} type="text" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
