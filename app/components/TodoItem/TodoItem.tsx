import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText, Paper, Typography, styled } from '@mui/material';

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
          <DeleteIcon style={{ color: 'pink' }} />
        </IconButton>
      }>
        <Checkbox
          checked={isDone}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <ListItemText
          primary={content}
        />
      </ListItem>
    </>
  )
}