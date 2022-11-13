import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, decreement, increement } from './redux/action';

function App() {
    const [value, setValue] = React.useState('');
    const { count, todos } = useSelector((store) => store);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h1>{count}</h1>
            <button
                onClick={() => {
                    dispatch(increement());
                }}
            >
                INC
            </button>
            <button
                onClick={() => {
                    dispatch(decreement());
                }}
            >
                DEC
            </button>
            <input
                type="number"
                onChange={({ target }) => setValue(target.value)}
            />
            <button
                onClick={() => {
                    dispatch(decreement(+value));
                }}
            >
                DEC by value
            </button>
            <button
                onClick={() => {
                    dispatch(increement(+value));
                }}
            >
                INC by value
            </button>
            <br />
            {todos.map((todo, index) => (
                <div key={index}>{todo}</div>
            ))}
            <input
                type="text"
                onChange={({ target }) => setValue(target.value)}
            />
            <button
                onClick={() => {
                    dispatch(addTodo(value));
                }}
            >
                Add todo
            </button>
        </div>
    );
}

export default App;
