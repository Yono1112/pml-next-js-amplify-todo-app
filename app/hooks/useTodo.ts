import { useState } from 'react';
import { Todo } from '@/app/types/todo';

export const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (todo: string) => {
        const todosLength = todos.length;
        const newTodo: Todo = {
            id: todosLength.toString(),
            title: todo,
            isDone: false,
        };
        setTodos([...todos, newTodo]);
        console.log('newTodo', newTodo);
    };

    const toggleComplete = (id: string) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    };

    const removeTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return {
        todos,
        addTodo,
        toggleComplete,
        removeTodo,
    };
};
