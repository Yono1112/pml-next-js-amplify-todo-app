import React from 'react'
import { TodoItem } from '@/app/components/TodoItem/TodoItem'
import { List } from '@mui/material';
import { useTodo } from '@/app/hooks/useTodo';

export const TodoList = () => {
  const { todos, toggleComplete, removeTodo } = useTodo();

  return (
    <List sx={{ maxHeight: 650, overflow: "auto" }}>
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            id={item.id ?? ""}
            title={item.title ?? ""}
            isDone={item.isDone ?? false}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        );
      })}
    </List>
  )
}