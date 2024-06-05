import { Button, TextField } from '@mui/material'
import React from 'react'

export const AddTodo = () => {
  return (
    <>
      <TextField
        label="Enter todo"
        value=""
        // onChange={(e) => setTodoText(e.target.value)}
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        // onClick={addTodo}
        fullWidth>
        Submit
      </Button>
    </>
  )
}