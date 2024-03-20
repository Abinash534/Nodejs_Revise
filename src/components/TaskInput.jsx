import React, { useState } from "react";

function TaskInput({ dispatch }) {
  let [inputData, setInputData] = useState("");

  const addTask = () => {
    if (!inputData.trim()) {
      alert("Enter your task");
    } else {
      dispatch({ type: "add", payload: inputData.trim() });
      setInputData("");
    }
  };

  return (
    <>
      <div className="input">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Enter your task..."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </>
  );
}

export default TaskInput;
