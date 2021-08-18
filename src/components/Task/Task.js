import "./Task.css";

const Task = (props) => {
  let color = "para";
  let taskCardColor = "container";

  if (props.task.completed) {
    color = "done";
    taskCardColor = "container task-card-done";
  } else {
    color = "para";
    taskCardColor = "container task-card";
  }

  return (
    <div className={taskCardColor}>
      <div className="row">
        <div className="col delete-col">
          <p className={color}>{props.task.text}</p>
          <p className="completed"></p>
        </div>
        <div className="col">
          <button
            className="delete-btn"
            onClick={() => props.deleteTask(props.index)}
          >
            &#10004;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
