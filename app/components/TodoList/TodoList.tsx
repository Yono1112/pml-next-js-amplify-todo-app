import React from 'react'
import { TodoItem } from '@/app/components/TodoItem/TodoItem'
import DeleteIcon from '@mui/icons-material/Delete';
import { Checkbox, Divider, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { Todo } from '@/app/types/todo'
import type { Schema } from '@/amplify/data/resource'

type TodoListProps = {
  todos: Schema["Todo"]["type"][],
  toggleComplete: (id: string) => void
  removeTodo: (id: string) => void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <List sx={{ maxHeight: 650, overflow: "auto" }}>
      {/* {todos.map((item) => {
        console.log(item);
        return (
          <>
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              isDone={item.isDone}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
            />
            <Divider />
          </>
        );
      })} */}
    </List>
  )
}