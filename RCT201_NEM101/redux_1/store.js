import { createStore } from 'redux';
import { addTodo, toggleTodo } from './action.js';
import reducer from './reducer.js';

// initial state
const initState = {
    todo: [],
};

// store
class Store {
    constructor(reducer, initState) {
        this.reducer = reducer;
        this.state = initState;
    }

    getState() {
        return this.state;
    }

    // dispatcher
    dispatch(action) {
        this.state = this.reducer(this.state, action);
    }
}

var store = createStore(reducer, initState);
console.log(store.getState());
store.dispatch(addTodo('Buy milk'));
store.dispatch(addTodo('Buy bread'));
store.dispatch(toggleTodo('Buy bread'));
console.log(store.getState());
