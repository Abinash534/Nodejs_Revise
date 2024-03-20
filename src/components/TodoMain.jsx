import React, { useReducer } from "react";
import TaskDisplay from "./TaskDisplay";
import TaskInput from "./TaskInput";
import { useTodo } from "../context/TodoContext";
import { todoReducer } from "../reducers/TodoReducer";

function TodoMain() {
  const data = useTodo();
  const [task, dispatch] = useReducer(todoReducer, data); // task will hold the data and dispatch will update the value
  return (
    <>
      <TaskInput dispatch={dispatch} />
      <TaskDisplay task={task} dispatch={dispatch} />
    </>
  );
}

export default TodoMain;
