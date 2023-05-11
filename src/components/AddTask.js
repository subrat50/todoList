import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../utils/todoSlice";

function AddTask({updateform,setUpdateform}) {
  const dispatch = useDispatch();
  const [addTask, setAddTask] = useState({
    taskName: "",
  });
  const changeHandler = (e) => {
    setAddTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // console.log(setAddTask)
  };
  // console.log(addTask)

  const submitHandler = (e) => {
    e.preventDefault();
    if (addTask.taskName === "") {
      alert("please enter task");
    }
    if (addTask.taskName) {
      dispatch(
        addtodo({
            id:new Date().getSeconds,
          task: addTask.taskName,
          time: new Date().toLocaleString(),
          completed:false
        })
        
      );
      alert("task added successfully");
    //   addTask.taskName=""
    
    }
  };
  return (
    <div
      className="d-flex"
      style={{
        justifyContent: "center",
        flexWrap: "wrap",
        position: "relative",
        gap: "31rem",
        top: "48px",
      }}
    >
      {updateform ? (
        <div>
          <form class="d-flex" role="search" onSubmit={submitHandler}>
            <input
              class="form-control me-2"
              type="search"
              placeholder="update task"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-success"
              type="submit"
              style={{ width: "10pc" }}
            >
              Update Task
            </button>
          </form>
        </div>
      ) : (
        <div>
          <form class="d-flex" role="search" onSubmit={submitHandler}>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Update Task"
              aria-label="Search"
              name="taskName"
              value={addTask.taskName}
              onChange={changeHandler}
            />
            <button
              class="btn btn-outline-success"
              type="submit"
              style={{ width: "10pc" }}
            >
              Add Task
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddTask;
