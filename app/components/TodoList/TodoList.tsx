import React from 'react'
import { TodoItem } from '../TodoItem/TodoItem'
import { Divider, List } from '@mui/material'

export const TodoList = () => {
  const todos = [
    {id: "1", title: "11111111111111111111111", isDone: true},
    {id: "2", title: "2", isDone: false},
    {id: "3", title: "3333333333333333", isDone: true},
    {id: "4", title: "4", isDone: true},
    {id: "5", title: "5", isDone: false},
    {id: "6", title: "6666666666666666", isDone: true},
    {id: "7", title: "7", isDone: false},
    {id: "8", title: "8", isDone: false},
    {id: "9", title: "9999999999999", isDone: true},
  ]
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
            />
            <Divider />
          </>
        );
      })}
    </List>
  )
}