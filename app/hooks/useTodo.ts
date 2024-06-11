import { useEffect, useState } from 'react';
import type { Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
// import { v4 as uuid } from 'uuid';

const client = generateClient<Schema>();

export const useTodo = () => {
    const [ todos, setTodos ] = useState<Schema["Todo"]["type"][]>([]);

    useEffect(() => {
        // console.log('useEffect');
        const sub = client.models.Todo.observeQuery().subscribe({
            next: ({ items }) => {
            setTodos([...items]);
            },
        });

        // console.log('sub', sub);
        return () => sub.unsubscribe();
    }, []);

    // const addTodo = async (todo: string) => {
    //     console.log('addTodo');
    //     await client.models.Todo.create({
    //     id: uuid(),
    //     title: todo,
    //     isDone: false,
    //     },
    //     {
    //         authMode: 'userPool',
    //     }
    //     );
    //     console.log('addTodo done');
    // };

    const toggleComplete = (id: string) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    };

    const removeTodo = async (id: string) => {
        await client.models.Todo.delete({ id });
    };

    return {
        todos,
        // addTodo,
        toggleComplete,
        removeTodo,
    };
};
