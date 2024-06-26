"use client";
import { Box, Button, Paper, Typography } from "@mui/material";
import { TodoList } from "@/app/components/TodoList/TodoList";
import { AddTodo } from "@/app/components/AddTodo/AddTodo";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

function Home(){
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Box display="flex" justifyContent="center">
          <Paper elevation={3} sx={{ padding: 2, width: '100%', maxWidth: 800, marginTop: 3 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h4">
                Todo List
              </Typography>
              <Button variant="outlined" color="primary" onClick={signOut}>
                Sign Out
              </Button>
            </Box>
            <TodoList/>
            <AddTodo username={user?.username}/>
          </Paper>
        </Box>
      )}
    </Authenticator>
  );
}

export default Home;