"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { TodoList } from "@/app/components/TodoList/TodoList";
import { AddTodo } from "@/app/components/AddTodo/AddTodo";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from "aws-amplify/api";
import { Schema } from "@/amplify/data/resource";
import { useTodo } from "./hooks/useTodo";
// import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(outputs);

function Home(){
  const { todos, addTodo } = useTodo();

  return (
    <>
      <h1>Todo List</h1>
      <div>
        <ul>
          <li> {todos.length} todos</li>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}({todo.id})</li>
          ))}
        </ul>
        <button onClick={addTodo}>Add new todo</button>
      </div>
    </>
  );
  // const { todos, addTodo, toggleComplete, removeTodo } = useTodo();

  // return (
  //   <Authenticator>
  //     {({ signOut, user }) => (
  //       <Box display="flex" justifyContent="center">
  //         <Paper elevation={3} sx={{ padding: 2, width: '100%', maxWidth: 800, marginTop: 3 }}>
  //           <Typography variant="h4" gutterBottom align="center">
  //             Todo List {user ? `for ${user.username}` : ''}
  //           </Typography>
  //           <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
  //           <AddTodo addTodo={addTodo} />
  //           <Button variant="contained" onClick={signOut}>Sign Out</Button>
  //         </Paper>
  //       </Box>
  //     )}
  //   </Authenticator>
  // );
}

export default Home;