import { useEffect, useState } from 'react';
import type { Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

export const useTodo = () => {
    const [ todos, setTodos ] = useState<Schema["Todo"]["type"][]>([]);

    // const fetchTodos = async () => {
    //     const { data: items, errors } = await client.models.Todo.list();
    //     setTodos(items);
    // };

    useEffect(() => {
        // console.log('useEffect');
        // fetchTodos();
        const sub = client.models.Todo.observeQuery().subscribe({
            next: ({ items }) => {
            setTodos([...items]);
            },
        });
        return () => sub.unsubscribe();
    }, []);

    const toggleComplete = (id: string) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    };

    const removeTodo = async (id: string) => {
        await client.models.Todo.delete({ id });
    };

    return {
        todos,
        toggleComplete,
        removeTodo,
    };
};
