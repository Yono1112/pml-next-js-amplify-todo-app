import React from 'react'
import { TodoItem } from '@/app/components/TodoItem/TodoItem'
import { Divider, List } from '@mui/material'
import { Todo } from '@/app/types/todo'

type TodoListProps = {
  todos: Todo[]
  toggleComplete: (id: string) => void
  removeTodo: (id: string) => void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <List sx={{ maxHeight: 650, overflow: "auto" }}>
      {todos.map((item) => {
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
      })}
    </List>
  )
}