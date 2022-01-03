import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        text: action.payload.text,
        completed: false,
        created: new Date().toISOString(),
      });
    },
    toggleTodoComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.created === action.payload.created
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(
        (todo) => todo.created !== action.payload.created
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
