import { createSlice } from "@reduxjs/toolkit";

const getInitialvalue = () => {
  const localdata = window.localStorage.getItem("todolist");
  console.log(localdata)
  if (localdata) {
    return JSON.parse(localdata);
  } 
    window.localStorage.setItem("todolist", []);
    return []
};
const initialvalue = {
  todolist: getInitialvalue(),
};
const cartSlice = createSlice({
  name: "todo",
  initialState: initialvalue,
  reducers: {
    addtodo: (state, action) => {
      state.todolist.push({ ...action.payload });
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem("todolist", JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          "todolist",
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todolist");
      console.log(todoList)
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem("todolist", JSON.stringify(todoListArr));
        state.todolist = todoListArr;
      }
    },
  },
});

export const { addtodo,deleteTodo } = cartSlice.actions;
export default cartSlice.reducer;
