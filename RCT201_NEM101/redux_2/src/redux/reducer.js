import { DEC, INC, ADD_TODO } from './actionTypes';

const initialState = { count: 0, todos: [] };

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case INC:
            return {
                ...state,
                count: state.count + payload,
            };
        case DEC:
            return {
                ...state,
                count: state.count - payload,
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload],
            };
        default: {
            return state;
        }
    }
};
