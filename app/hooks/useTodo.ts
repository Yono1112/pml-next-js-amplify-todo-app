// import { fetch } from './../../node_modules/@whatwg-node/fetch/dist/index.d';
import { useEffect, useState } from 'react';
import { Todo } from '@/app/types/todo';
import type { Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export const useTodo = () => {
    // const [todos, setTodos] = useState<Todo[]>([]);
    const [ todos, setTodos ] = useState<Schema["Todo"]["type"][]>([]);

    // const fetchTodos = async () => {
    //     const { data: items, errors } = await client.models.Todo.list();
    //     if (errors) {
    //         console.error(errors);
    //         return;
    //     }
    //     setTodos(items);
    // };

    useEffect(() => {
        // fetchTodos();
        const sub = client.models.Todo.observeQuery().subscribe({
            next: ({ items }) => {
            setTodos([...items]);
            },
        });

        return () => sub.unsubscribe();
    }, []);

    const addTodo = async (todo: string) => {
        // console.log('createTodo');
        await client.models.Todo.create({
        id: todos.length.toString(),
        title: todo,
        isDone: false,
        });
        // fetchTodos();
    };

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

    const removeTodo = async (id: string) => {
        // setTodos(todos.filter(todo => todo.id !== id));
        await client.models.Todo.delete({ id });
        // fetchTodos();
    };

    return {
        todos,
        addTodo,
        toggleComplete,
        removeTodo,
    };
};
