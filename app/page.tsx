import { Box, Paper, Typography } from "@mui/material";
import { TodoList } from "./components/TodoList/TodoList";
import { AddTodo } from "./components/AddTodo/AddTodo";

export default function Home() {
  return (
    <Box display="flex" justifyContent="center">
      <Paper elevation={3} sx={{ padding: 2, width: '100%', maxWidth: 800, marginTop: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Todo List
        </Typography>
        <TodoList />
        <AddTodo />
      </Paper>
    </Box>
  );
}