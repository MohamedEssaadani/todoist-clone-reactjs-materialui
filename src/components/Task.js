import React from "react";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";

function Task({ task }) {
  return (
    <div className="projectView__contentItemTask" key={task.id}>
      <RadioButtonUncheckedOutlinedIcon />
      <p>{task.title}</p>
    </div>
  );
}

export default Task;
