import React from "react";
import Task from "../Task/Task";
import TasksForm from "../TasksForm/TasksForm";
import "./Board.css";

class Board extends React.Component {
  constructor() {
    super();

    this.state = {
      // tasks: [
      //   { text: "fishing", completed: false },
      //   { text: "eating", completed: false },
      // ],
      tasks: JSON.parse(localStorage.getItem("tasks")) || [],
      task: { text: "", completed: false },
    };
  }

  handleUpdateState = (e) => {
    const newState = e.target.value;
    this.setState({ task: { text: newState, completed: false } });
  };

  addTask = (e) => {
    e.preventDefault();

    const myTasks = [...this.state.tasks];

    const task = this.state.task;
    console.log("task is: ", task);

    myTasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(myTasks));

    this.setState({ tasks: myTasks });
  };

  //---------------Mark a Task-----------------
  deleteTask = (k) => {
    let tasksArr = this.state.tasks;
    tasksArr[k].completed = true;
    this.setState({ tasks: tasksArr });
    console.log("completed");
    console.log(k);
  };

  //---------------Delete Completed-----------------
  deleteCompleted = () => {
    console.log("delete completed");
    let newTasks = [...this.state.tasks];
    newTasks = this.state.tasks.filter((task) => task.completed === false);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    this.setState({ tasks: newTasks });
  };

  //---------------Deleting All Tasks-----------------
  deleteAll = () => {
    let newTasks = [];
    console.log("delete all");
    this.setState({ tasks: [] });
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  render() {
    return (
      <div className="container board-container">
        <h1>Reactjs-Todo List</h1>
        <div>
          SEARCH
        </div>
        <div>
          <TasksForm
            handleUpdateState={this.handleUpdateState}
            addTask={this.addTask}
          />
        </div>
        <div className="container delete-container">
          <div id="todo-del">
            <div className="row">
              <div className="col del-all-btn">
                <input
                  className="del-all-btn"
                  type="button"
                  value="Delete All"
                  id="todo-delall"
                  onClick={this.deleteAll}
                />
              </div>
              <div className="col-9">
                <input
                  className="del-comp"
                  type="button"
                  value="Delete Completed"
                  id="todo-delcom"
                  onClick={this.deleteCompleted}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col">
                {this.state.tasks.length !== 0 &&
                  this.state.tasks.map((task, index) => {
                    return (
                      <Task
                        index={index}
                        key={index}
                        task={task}
                        deleteTask={this.deleteTask}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
