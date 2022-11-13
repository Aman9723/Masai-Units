import {
    combineReducers,
    compose,
    legacy_createStore,
    applyMiddleware,
} from 'redux';
import { authReducer } from './auth/auth.reducer';

import { counterReducer } from './counter/counter.reducer';
import { todoReducer } from './todo/todo.reducer';

// const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const rootReducer = combineReducers({
    counter: counterReducer,
    todoApp: todoReducer,
    authentication: authReducer,
});

// nested functions
const logger = (state) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(state.dispatch, state.getState);
    }
    return next(action);
};

export const store = legacy_createStore(rootReducer, applyMiddleware(logger));
