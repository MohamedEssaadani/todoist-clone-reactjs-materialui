// Styles
import "../styles/ProjectView.css";
// Material ui
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function ProjectView() {
  // add task jsx
  const addTask = () => (
    <div className="projectView__addTask">
      <AddOutlinedIcon />
      <p>Ajouter une tache </p>
    </div>
  );

  // task jsx
  const task = (title) => (
    <div className="projectView__contentItemTask">
      <RadioButtonUncheckedOutlinedIcon />
      <p>{title}</p>
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
        <div className="projectView__contentItem">
          <p className="projectView__contentItemHeader">
            <h3>TODO</h3>
            <MoreHorizOutlinedIcon className="projectView__contentItemHeaderIcon" />
          </p>
          {/* Task */}
          {task("Do Todoist clone backend")}
          {/* Add task */}
          {addTask()}
        </div>

        <div className="projectView__contentItem">
          <p className="projectView__contentItemHeader">
            <h3>IN PROGRESS</h3>
            <MoreHorizOutlinedIcon className="projectView__contentItemHeaderIcon" />
          </p>
          {/* Task */}
          {task("Do todoist clone front end")}
          {/* Add task */}
          {addTask()}
        </div>

        <div className="projectView__contentItem">
          <p className="projectView__contentItemHeader">
            <h3>DONE</h3>
            <MoreHorizOutlinedIcon className="projectView__contentItemHeaderIcon" />
          </p>
          {/* Task */}
          {task("Do linkedin clone")}
          {/* Add task */}
          {addTask()}
        </div>
      </div>
    </div>
  );
}

export default ProjectView;
