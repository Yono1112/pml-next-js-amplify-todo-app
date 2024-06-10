// import { fetch } from './../../node_modules/@whatwg-node/fetch/dist/index.d';
import { useEffect, useState } from 'react';
import type { Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { v4 as uuid } from 'uuid';

const client = generateClient<Schema>();

export const useTodo = () => {
    const [ todos, setTodos ] = useState<Schema["Todo"]["type"][]>([]);

    useEffect(() => {
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
        id: uuid(),
        title: todo,
        isDone: false,
        },
        {
            authMode: 'userPool',
        }
        );
    };

    const toggleComplete = (id: string) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    };

    const removeTodo = async (id: string) => {
        await client.models.Todo.delete({ id });
    };

    return {
        todos,
        addTodo,
        toggleComplete,
        removeTodo,
    };
};
