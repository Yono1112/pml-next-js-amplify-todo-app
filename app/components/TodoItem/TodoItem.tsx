import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

type TodoItemProps = {
    id: string
    content: string
    isDone: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({id, content, isDone}) => {
  return (
    <div>
        {isDone ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        <div>{id}</div>
        <div>{content}</div>
    </div>
  )
}

export default TodoItem