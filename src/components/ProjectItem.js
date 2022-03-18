import React from "react";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import { MoreHorizOutlined } from "@mui/icons-material";

function ProjectItem({ category, addTaskJSX }) {
  // if todo get tasks of todo
  // if in progress get tasks of in progress
  // if done get tasks of done

  // task jsx
  const task = (title) => (
    <div className="projectView__contentItemTask">
      <RadioButtonUncheckedOutlinedIcon />
      <p>{title}</p>
    </div>
  );

  return (
    <div className="projectView__contentItem">
      <p className="projectView__contentItemHeader">
        <h3>TODO</h3>
        <MoreHorizOutlined className="projectView__contentItemHeaderIcon" />
      </p>
      {/* Task */}
      {task("Do Todoist clone backend")}
      {/* Add task */}
      {addTaskJSX()}
    </div>
  );
}

export default ProjectItem;
