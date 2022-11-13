import React, { useCallback } from 'react';
import './App.css';
import Child from './Components/Child';

function App() {
    const [count, setCount] = React.useState(0);
    const [value, setValue] = React.useState('');

    // only creates a referece of function when count is updated
    const updateCount = useCallback(() => setCount(count + 1), [count]);

    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Child count={count} updateCount={updateCount} />
        </div>
    );
}

export default App;
