import React from 'react';
import { addTodo, deleteTodo, updateTodo } from '../Redux/todo/todo.actions';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from '../Redux/todo/todo.reducer';

function TodoApp() {
    const [value, setValue] = React.useState('');
    const todos = useSelector((store) => store.todoApp.todos);
    const dispatch = useDispatch();

    // React.useEffect(() => {
    //     dispatch(getTodos());
    // }, []);

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <div
                        onClick={() =>
                            dispatch(
                                updateTodo({
                                    ...todo,
                                    status:
                                        todo.status === 'not completed'
                                            ? 'completed'
                                            : 'not completed',
                                })
                            )
                        }
                    >
                        {todo.name} - {todo.status}
                    </div>
                    <button onClick={() => dispatch(deleteTodo(todo))}>
                        Delete
                    </button>
                </div>
            ))}
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={({ target }) => setValue(target.value)}
                />
                <button
                    onClick={() => {
                        dispatch(
                            addTodo({ name: value, status: 'not completed' })
                        );
                        setValue('');
                    }}
                >
                    Add
                </button>
            </div>
        </div>
    );
}

export default TodoApp;
