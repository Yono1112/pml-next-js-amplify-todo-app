// import { fetch } from './../../node_modules/@whatwg-node/fetch/dist/index.d';
import { useEffect, useState } from 'react';
import { Todo } from '@/app/types/todo';
import type { Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export const useTodo = () => {
    // const [todos, setTodos] = useState<Todo[]>([]);
    const [ todos, setTodos ] = useState<Schema["Todo"]["type"][]>([]);

    const fetchTodos = async () => {
        const { data: items, errors } = await client.models.Todo.list();
        if (errors) {
            console.error(errors);
            return;
        }
        setTodos(items);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = async () => {
        // console.log('createTodo');
        await client.models.Todo.create({
        id: todos.length.toString(),
        title: window.prompt('Enter todo title'),
        isDone: false,
        });
        fetchTodos();
    };

    // const addTodo = async (todo: string) => {
    //     await client.models.Todo.create({
    //         title: todo,
    //         isDone: false
    //     });
    //     fetchTodos();
    // }

    // const addTodo = (todo: string) => {
    //     const todosLength = todos.length;
    //     const newTodo: Todo = {
    //         id: todosLength.toString(),
    //         title: todo,
    //         isDone: false,
    //     };
    //     setTodos([...todos, newTodo]);
    // };

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
