import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../components/todoitem.css";

import Todolist from "./Todolist";
function Todoitem({ updateform, setUpdateform }) {
  const todolist = useSelector((store) => store.todo.todolist);
  const [check, setCheck] = useState(false);
  const [editform, setEditform] = useState("");
  const handleclick=(todo)=>{
    setUpdateform(true)
    setEditform(todo)
  }
  console.log("handle".handleclick)
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        position: "relative",
        top: "89px",
      }}
    >
      {todolist.length === 0 ? (
        <table
          className="table"
          style={{ width: "45rem", border: "1px solid black" }}
        >
          <thead>
            <tr>
              <th colSpan={2}>Tasks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>"please add task"</tr>
          </tbody>
        </table>
      ) : (
        <div>
          {todolist.map((res) =>
            !res ? (
              "No data"
            ) : (
              <table
                className="table"
                style={{ width: "45rem", border: "1px solid black" }}
              >
                <thead>
                  <tr>
                    <th colSpan={3}>Tasks</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody key={res.id}>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{res.time}</td>
                    <td>{res.task}</td>
                    <td>
                      <Todolist 
                        res={res}
                        handleclick={handleclick}
                        updateform={updateform}
                        setUpdateform={setUpdateform}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Todoitem;
