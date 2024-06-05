import React from 'react'
import { TodoItem } from '../TodoItem/TodoItem'
import { Box, Divider, List, Paper, Stack, styled } from '@mui/material'

export const TodoList = () => {
  const todos = [
    {id: "1", content: "11111111111111111111111", isDone: true},
    {id: "2", content: "2", isDone: false},
    {id: "3", content: "3333333333333333", isDone: true},
    {id: "4", content: "4", isDone: true},
    {id: "5", content: "5", isDone: false},
    {id: "6", content: "6666666666666666", isDone: true},
    {id: "7", content: "7", isDone: false},
    {id: "8", content: "8", isDone: false},
    {id: "9", content: "9999999999999", isDone: true},
    {id: "11", content: "10", isDone: false},
    {id: "12", content: "8", isDone: false},
    {id: "13", content: "9999999999999", isDone: true},
    {id: "14", content: "10", isDone: false},
  ]
  return (
    <List sx={{ maxHeight: 650, overflow: "auto" }}>
      {todos.map((item) => {
        return (
          <>
            <TodoItem
              key={item.id}
              id={item.id}
              content={item.content}
              isDone={item.isDone}
            />
            <Divider />
          </>
        );
      })}
    </List>
  )
}