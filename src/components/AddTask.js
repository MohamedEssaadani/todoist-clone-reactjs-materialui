import React, { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const AddTask = ({ categoryId, addTask }) => {
  const [toggleInput, setToggleInput] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskTitle("");
    addTask(categoryId, taskTitle);
  };
  return (
    <div
      className="projectView__addTask"
      onDoubleClick={() => setToggleInput(!toggleInput)}
    >
      <AddOutlinedIcon />
      {toggleInput ? (
        <form>
          <input
            type={"text"}
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit" hidden></button>
        </form>
      ) : (
        <p>Ajouter une tache </p>
      )}
    </div>
  );
};

export default AddTask;
