import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';

type TodoItemProps = {
    id: string
    content: string
    isDone: boolean
}

export const TodoItem: React.FC<TodoItemProps> = ({id, content, isDone}) => {
  return (
    <>
      <ListItem secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon sx={{ color: 'pink' }} />
        </IconButton>
      }>
        <Checkbox
          checked={isDone}
          inputProps={{ 'aria-label': 'primary checkbox' }}
          sx={{ marginRight: 1 }}
        />
        <ListItemText
          primary={content}
          sx={{ textDecoration: isDone ? 'line-through' : 'none' }}
        />
      </ListItem>
    </>
  )
}