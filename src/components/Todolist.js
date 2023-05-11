import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../utils/todoSlice";
function Todolist({ res, updateform, setUpdateform, handleclick }) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteTodo(res.id));
  };
  const edithandler = (e) => {
    setUpdateform(true);
  };
  return (
    <div>
      <ul className="d-flex" style={{ listStyle: "none" }}>
        <li className="li" role="button" onClick={() => deleteHandler()}>
          <i class="fa-sharp fa-solid fa-trash"></i>
        </li>
        <li role="button" onClick={() => edithandler()}>
          <i class="fa-solid fa-pen"></i>
        </li>
      </ul>
    </div>
  );
}

export default Todolist;
