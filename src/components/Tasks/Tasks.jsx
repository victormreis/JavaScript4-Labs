import Task from "../Task/Task";

function Tasks({tasks, onClearTasks, onStatusChange, onTaskRemove}) {

  return (
    <>
      <h2>These are the tasks:</h2>

      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onTaskRemove={onTaskRemove}
        />
      ))}

      <hr />
      <button onClick={onClearTasks}>Clear Tasks</button>
    </>
  );
}

export default Tasks;