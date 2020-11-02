import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { todo } from "../../types-and-interfaces/interfaces";
import AddTodo from "./AddTodo";

let todos: Array<todo> = [
  {
    id: 1,
    task: "shopping",
    done: false,
  },
  {
    id: 2,
    task: "studying",
    done: true,
  },
];

function TodoList() {
  const [todosState, setTodosState] = useState<Array<todo>>(todos);

  const toggleTaskDone = (id: number) => {
    setTodosState((previousState) => {
      return previousState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else return todo;
      });
    });
  };

  const addTodo = (task: string) => {
    setTodosState((previousState) => {
      return [
        ...previousState,
        { id: previousState.length + 2, task: task, done: false },
      ];
    });
  };
  const renderTodo = () => {
    return todosState.map((todo) => (
      <Todo todo={todo} toggleTaskDone={toggleTaskDone} />
    ));
  };
  return (
    <>
      <AddTodo addTodo={addTodo} />
      <ul>{renderTodo()}</ul>
    </>
  );
}

export default TodoList;
