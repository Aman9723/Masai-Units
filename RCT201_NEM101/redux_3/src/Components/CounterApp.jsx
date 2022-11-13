import React from 'react';
import { increement, decreement } from '../Redux/counter/counter.actions';
import { useDispatch, useSelector } from 'react-redux';

function CounterApp() {
    const dispatch = useDispatch();
    const counter = useSelector((store) => store.counter.count);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button
                onClick={() => {
                    dispatch(increement());
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    dispatch(decreement());
                }}
            >
                -
            </button>
        </div>
    );
}

export default CounterApp;
