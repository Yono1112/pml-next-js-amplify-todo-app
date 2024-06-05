import { Box, Paper, Typography } from "@mui/material";
import { TodoList } from "./components/TodoList/TodoList";
import { AddTodo } from "./components/AddTodo/AddTodo";

export default function Home() {
  return (
    <Box display="flex" justifyContent="center">
      <Paper elevation={3} style={{ padding: '20px', width: '100%', maxWidth: '800px', marginTop: '25px' }}>
        <Typography variant="h4" gutterBottom align="center">
          Todo List
        </Typography>
        <TodoList />
        <AddTodo />
      </Paper>
    </Box>
  );
}