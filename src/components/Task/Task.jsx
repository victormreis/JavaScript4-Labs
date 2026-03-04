import "./Task.scss";

function Task(props) {
  const handleStatusClick = () => {
    props.onStatusChange(props.task.id);
  };

  const handleRemoveClick = () => {
    props.onTaskRemove(props.task.id);
  };

  return (
    <div className={`task ${props.task.done ? "completed" : ""}`}>
      <h3>{props.task.description}</h3>
      <div className="task-info">Id: {props.task.id}</div>
      <div className="task-info">
        Status: {props.task.done ? "Completed" : "Open"}
      </div>

      <div className="buttons">
        <button className="status-btn" onClick={handleStatusClick}>
          Change Status
        </button>

        <button className="remove-btn" onClick={handleRemoveClick}>
          Remove Task
        </button>
      </div>
    </div>
  );
}

export default Task;