import "./TasksForm.css";

const TasksForm = (props) => {
  return (
    <div className="container form-container">
      <div className="row">
        <div className="col">
          <input
            type="text"
            id="todo-item"
            placeholder="New Task"
            required
            onChange={props.handleUpdateState}
            
          />
          <button  onClick={props.addTask} id="todo-save">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TasksForm;
