"use client";
import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { TodoList } from "@/app/components/TodoList/TodoList";
import { AddTodo } from "@/app/components/AddTodo/AddTodo";
import { Todo } from "@/app/types/todo";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: string) => {
    const todosLength = todos.length + 1;
    const newTodo = {
      id: todosLength.toString(),
      title: todo,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: string) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

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