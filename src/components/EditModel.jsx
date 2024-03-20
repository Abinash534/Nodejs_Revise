import React, { useState } from "react";
import { GiCrossMark } from "react-icons/gi";

function EditModel({ closeModal, editTask, dispatch }) {
  const [updateTask, setUpdateTask] = useState(editTask.task); //to update the textarea text we create state here

  const updateHandler = () => {
    dispatch({
      type: "edit",
      payload: { task: updateTask, index: editTask.index },
    });
    closeModal();
  };
  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <h2>Edit your task</h2>
          <textarea
            cols="40"
            rows="7"
            value={updateTask}
            onChange={(e) => setUpdateTask(e.target.value)}
          ></textarea>
          <div className="modal-button">
            <button onClick={updateHandler}>Update</button>
            <button onClick={closeModal}>Close</button>
          </div>
          <h2 className="cross" onClick={closeModal}>
            <GiCrossMark />
          </h2>
        </div>
      </div>
    </>
  );
}

export default EditModel;
