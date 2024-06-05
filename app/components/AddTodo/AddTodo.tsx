"use client";
import React from 'react'
import { Box, Button, FormHelperText, TextField } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'

type inputText = {
  todo: string
}

export const AddTodo = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<inputText>({ mode: 'onChange' })
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
        {...register('todo', { required: "This field is required", maxLength: { value: 20, message: "Max length is 20" }})}
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