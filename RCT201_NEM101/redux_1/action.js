import { ADD_TODO, TOGGLE_TODO } from './actionTypes.js';

// action creators
export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload: {
        title: payload,
        status: false,
    },
});

export const toggleTodo = (payload) => ({
    type: TOGGLE_TODO,
    payload,
});
