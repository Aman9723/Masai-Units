import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/Stopwatch';
import Posts from './components/Posts';

function App() {
    return (
        <div className="App">
            <Stopwatch name="SW1" />
            <Stopwatch name="SW2" />
            <Stopwatch name="SW3" />
            <Posts />
        </div>
    );
}

export default App;
