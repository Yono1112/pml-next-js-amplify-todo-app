"use client";
import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { TodoList } from "@/app/components/TodoList/TodoList";
import { AddTodo } from "@/app/components/AddTodo/AddTodo";
import { useTodo } from "@/app/hooks/useTodo";

export default function Home() {
  const { todos, addTodo, toggleComplete, removeTodo } = useTodo();

  return (
    <Box display="flex" justifyContent="center">
      <Paper elevation={3} sx={{ padding: 2, width: '100%', maxWidth: 800, marginTop: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Todo List
        </Typography>
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
        <AddTodo addTodo={addTodo} />
      </Paper>
    </Box>
  );
}