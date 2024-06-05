import { Box, Container } from "@mui/material";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </Container>
  );
}