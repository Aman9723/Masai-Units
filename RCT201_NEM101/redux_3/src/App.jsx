import './App.css';
import TodoApp from './Components/TodoApp';
import CounterApp from './Components/CounterApp';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import Login from './Components/Login';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Navbar />
                            <CounterApp />
                            <TodoApp />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
