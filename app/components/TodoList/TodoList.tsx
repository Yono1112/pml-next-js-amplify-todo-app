import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = () => {
  return (
    <>
      <div>TodoList</div>
      <TodoItem id="hoge" content="hogehoge" isDone={false} />
    </>
  )
}

export default TodoList