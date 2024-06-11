import { useEffect, useState } from 'react';
import type { Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

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

    const toggleComplete = async (id: string) => {
        const todo = todos.find((todo) => todo.id === id);
        if (!todo) {
            return;
        }

        const updatedTodo = {
            ...todo,
            isDone: !todo.isDone,
        };

        await client.models.Todo.update({
            id: updatedTodo.id,
            title: updatedTodo.title,
            isDone: updatedTodo.isDone,
            owner: updatedTodo.owner,
        });
        setTodos(todos.map(t => t.id === id ? updatedTodo : t));
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
