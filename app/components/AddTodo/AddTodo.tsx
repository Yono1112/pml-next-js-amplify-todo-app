"use client";
import React from 'react'
import { Box, Button, FormHelperText, TextField } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { todoSchema } from '@/app/validation/schemas';

type inputText = {
  todo: string
}

export const AddTodo = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<inputText>({
    resolver: yupResolver(todoSchema),
    mode: 'onChange'
  });
  const onSubmit: SubmitHandler<inputText> = (data) => {
    console.log(data);
    reset();
  }
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
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