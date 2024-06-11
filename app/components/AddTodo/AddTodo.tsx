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
  addTodo: (todo: string) => void
}

export const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<inputText>({
    resolver: yupResolver(todoSchema),
    mode: 'onChange'
  });

  const onSubmit: SubmitHandler<inputText> = (data) => {
    addTodo(data.todo);
    reset();
  }

  // const addTodo = async (todo: string) => {
  //     // console.log('addTodo');
  //     await client.models.Todo.create({
  //     id: uuid(),
  //     title: todo,
  //     isDone: false,
  //     },
  //     {
  //         authMode: 'userPool',
  //     }
  //     );
  //     // console.log('addTodo done');
  // };

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