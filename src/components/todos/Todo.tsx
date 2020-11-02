import React from "react";
import { todo } from "../../types-and-interfaces/interfaces";

interface propType {
  todo: todo;
  toggleTaskDone: Function;
}

function Todo(props: propType) {
  const checkboxClickedEvent = (e) => {
    props.toggleTaskDone(props.todo.id);
  };

  const renderIsChecked = (isChecked) => {
    return (
      <input
        onChange={checkboxClickedEvent}
        type="checkbox"
        checked={isChecked}
      />
    );
  };

  return (
    <div key={props.todo.id}>
      {props.todo.task} {renderIsChecked(props.todo.done)}
    </div>
  );
}

export default Todo;
