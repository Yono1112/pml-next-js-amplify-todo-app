"use client";
import { Box, Paper, Typography } from "@mui/material";
import { TodoList } from "@/app/components/TodoList/TodoList";
import { AddTodo } from "@/app/components/AddTodo/AddTodo";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import { useTodo } from "./hooks/useTodo";
// import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(outputs);

function Home(){
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
    // <Authenticator>
    //   {({ signOut, user }) => (
    //     <Box display="flex" justifyContent="center">
    //       <Paper elevation={3} sx={{ padding: 2, width: '100%', maxWidth: 800, marginTop: 3 }}>
    //         <Typography variant="h4" gutterBottom align="center">
    //           Todo List {user ? `for ${user.username}` : ''}
    //         </Typography>
    //         <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    //         <AddTodo addTodo={addTodo} />
    //         <Button variant="contained" onClick={signOut}>Sign Out</Button>
    //       </Paper>
    //     </Box>
    //   )}
    // </Authenticator>
  );
}

export default Home;