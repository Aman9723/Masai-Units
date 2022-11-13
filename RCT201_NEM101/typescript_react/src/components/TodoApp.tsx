import React from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import { BsTrash } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
import { GiTireIronCross } from 'react-icons/gi';

let todo = { id: 1, content: 'Todo Number 1', isCompleted: false };

type Todo = {
    id: number;
    content: string;
    isCompleted: boolean;
};

const TodoApp = () => {
    const [todos, setTodos] = React.useState<Todo[]>([]);

    const addTodo = (content: string) => {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                content,
                isCompleted: false,
            },
        ]);
    };

    const toggleStatus = (id: number) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) todo.isCompleted = !todo.isCompleted;
            return todo;
        });
        setTodos(updatedTodos);
    };

    const deleteTodo = (id: number) => {
        let updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>Todo App</h1>
            <TodoInput onAdd={addTodo} />
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    toggleStatus={toggleStatus}
                    deleteIcon={<BsTrash onClick={() => deleteTodo(todo.id)} />}
                    completedIcon={<MdDone />}
                    inCompleteIcon={<GiTireIronCross />}
                />
            ))}
        </div>
    );
};

export default TodoApp;
