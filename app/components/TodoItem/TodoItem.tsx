import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, Divider, IconButton, ListItem, ListItemText } from '@mui/material';

type TodoItemProps = {
    id: string
    title: string
    isDone: boolean
    toggleComplete: (id: string) => void;
    removeTodo: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({id, title, isDone, toggleComplete, removeTodo }) => {
  return (
    <>
      <ListItem secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => removeTodo(id)}
        >
          <DeleteIcon sx={{ color: 'pink' }} />
        </IconButton>
      }>
        <Checkbox
          checked={isDone}
          onChange={() => toggleComplete(id)}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          sx={{ marginRight: 1 }}
        />
        <ListItemText
          primary={title}
          sx={{ textDecoration: isDone ? 'line-through' : 'none' }}
        />
      </ListItem>
      <Divider />
    </>
  )
}