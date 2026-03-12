import "./Tasks.scss";
import Task from "../Task/Task";

function Tasks({tasks, onClearTasks, onStatusChange, onTaskRemove}) {

  return (
    <div className="tasks-container">
      <h2>These are the tasks:</h2>

      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onTaskRemove={onTaskRemove}
        />
      ))}

      <button className="clear-btn" onClick={onClearTasks}>
        Clear Tasks
      </button>
    </div>
  );
}

export default Tasks;