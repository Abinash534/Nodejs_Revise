import React, { useState } from "react";
import EditModel from "./EditModel";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

function TaskDisplay({ task, dispatch }) {
  const [isModal, setIsModal] = useState(false); //for modal create state here

  const [editTask, setEditTask] = useState({}); //to edit the older task create state here

  const editHandler = (task, index) => {
    setIsModal(true);
    setEditTask({ task, index });
  };

  const closeModal = () => {
    setIsModal(false);
  };
  return (
    <>
      <div className="container">
        {task.map((task, index) => {
          return (
            <div className="card">
              <h3>{task}</h3>
              <div className="buttons">
                <button
                  onClick={() => dispatch({ type: "delete", payload: index })}
                >
                  <RiDeleteBin2Fill />
                </button>
                <button onClick={() => editHandler(task, index)}>
                  <FaRegEdit />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {isModal && (
          <EditModel
            closeModal={closeModal}
            editTask={editTask}
            dispatch={dispatch}
          />
        )}
      </div>
    </>
  );
}

export default TaskDisplay;
