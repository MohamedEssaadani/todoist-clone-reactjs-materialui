// Styles
import "../styles/ProjectView.css";
// Material ui
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ProjectItem from "./ProjectItem";

function ProjectView() {
  // add task jsx
  const addTaskJSX = () => (
    <div className="projectView__addTask">
      <AddOutlinedIcon />
      <p>Ajouter une tache </p>
    </div>
  );

  return (
    <div className="projectView">
      <div className="projectView__header">
        <h3>Project XYZ</h3>

        <div className="projectView__headerInfos">
          <p className="projectView__headerInfosItem">
            <ChatBubbleOutlineOutlinedIcon />
            <span>Commentaires</span>
          </p>
          <p className="projectView__headerInfosItem">
            <PersonOutlinedIcon />
            <span>4</span>
          </p>
          <p className="projectView__headerInfosItem">
            <VisibilityOutlinedIcon />
            <span>Vue</span>
          </p>
          <p className="projectView__headerInfosItem">
            <MoreHorizOutlinedIcon />
          </p>
        </div>
      </div>

      <div className="projectView__content">
        {/* Todo */}
        <ProjectItem category={"TODO"} addTaskJSX={addTaskJSX} />

        {/* In progress */}
        <ProjectItem category={"INPROGRESS"} addTaskJSX={addTaskJSX} />

        {/* Done */}
        <ProjectItem category={"DONE"} addTaskJSX={addTaskJSX} />
      </div>
    </div>
  );
}

export default ProjectView;
