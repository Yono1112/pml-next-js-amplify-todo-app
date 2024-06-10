"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { TodoList } from "@/app/components/TodoList/TodoList";
import { AddTodo } from "@/app/components/AddTodo/AddTodo";
import { useTodo } from "@/app/hooks/useTodo";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import { generateClient } from "aws-amplify/api";
import { Schema } from "@/amplify/data/resource";
// import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(outputs);

const client = generateClient<Schema>()

function Home(){
  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);

  const fetchTodos = async () => {
    // console.log('fetchTodos');
    const { data: items, errors } = await client.models.Todo.list();
    setTodos(items);
  };

  useEffect(() => {
    // console.log('useEffect');
    fetchTodos();
    // const sub = client.models.Todo.observeQuery().subscribe({
    //   next: ({ items }) => {
    //     setTodos([...items]);
    //   },
    // });

    // return () => sub.unsubscribe();
  }, []);

  const createTodo = async () => {
    // console.log('createTodo');
    await client.models.Todo.create({
      id: Math.random().toString(),
      title: window.prompt('Enter todo title'),
      isDone: false,
    });

    fetchTodos();
  }

  return (
    <>
      <h1>Todo List</h1>
      <div>
        <ul>
          <li> {todos.length} todos</li>
          {todos.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
        <button onClick={createTodo}>Add new todo</button>
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