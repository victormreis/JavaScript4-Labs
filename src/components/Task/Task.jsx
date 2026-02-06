function Task(props) {
  const handleStatusClick = () => {
    props.onStatusChange(props.task.id);
  };

  const handleRemoveClick = () => {
    props.onTaskRemove(props.task.id);
  };

  return (
    <div>
      <hr />
      <h3>{props.task.description}</h3>
      <div>Id: {props.task.id}</div>
      <div>
        Status: {props.task.done ? "Completed" : "Open"}
      </div>
      <button onClick={handleStatusClick}>
        Change Status
      </button>
      <button onClick={handleRemoveClick}>
        Remove Task
      </button>
    </div>
  );
}

export default Task;
