"use client";
import React from 'react'
import { Box, Button, FormHelperText, TextField } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { todoSchema } from '@/app/validation/schemas';
import { v4 as uuid } from 'uuid';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';

type inputText = {
  todo: string
}

type AddTodoProps = {
  username: string | undefined
}

const client = generateClient<Schema>();

export const AddTodo: React.FC<AddTodoProps> = ({username}) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<inputText>({
    resolver: yupResolver(todoSchema),
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<inputText> = (data) => {
    if (username) {
      addTodo(data.todo, username);
      reset();
    } else {
      console.error("Username is not defined");
    }
  }

  const addTodo = async (todo: string, username: string) => {
    await client.models.Todo.create({
    id: uuid(),
    title: todo,
    isDone: false,
    owner: username,
    },
    {
        authMode: 'userPool',
    }
    );
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate // disable default browser validation
    >
      <TextField
        label="Enter todo"
        fullWidth
        variant="outlined"
        margin="normal"
        error={!!errors.todo}
        {...register('todo')}
      />
      {errors.todo && (
        <FormHelperText error>
          {errors.todo.message}
        </FormHelperText>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: 1 }}
        fullWidth
      >
        Submit
      </Button>
    </Box>
  )
}