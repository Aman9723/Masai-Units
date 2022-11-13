// add update delete
import { ADD_TODO, DELETE_TODO, GET_TODO, UPDATE_TODO } from './todo.types';
import axios from 'axios';

// export const getTodos = () => async (dispatch) => {
//     let response = await axios.get('http://localhost:8000/todos');
//     let data = await response.data;
//     dispatch({
//         type: GET_TODO,
//         payload: data,
//     });
// };

const loadData = (key) => {
    return JSON.parse(localStorage.getItem(key)) || [];
};

const saveData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const initialState = {
    todos: loadData('todos'),
};

export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_TODO: {
            return {
                ...state,
                todos: payload,
            };
        }
        case ADD_TODO: {
            let newTodos = [...state.todos, payload];
            saveData('todos', newTodos);
            return {
                ...state,
                todos: newTodos,
            };
        }
        case UPDATE_TODO: {
            const id = payload.id;
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === id) {
                    return payload;
                }
                return todo;
            });
            saveData('todos', updatedTodos);
            return {
                ...state,
                todos: updatedTodos,
            };
        }
        case DELETE_TODO: {
            const id = payload.id;
            const filterTodos = state.todos.filter((todo) => todo.id !== id);
            saveData('todos', filterTodos);
            return {
                ...state,
                todos: filterTodos,
            };
        }
        default:
            return state;
    }
};
