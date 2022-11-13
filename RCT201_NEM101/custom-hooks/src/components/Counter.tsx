import React from 'react';
import { useMyReducer } from '../hooks/useMyReducer';

const INC = 'inc';
const DEC = 'dec';

enum CountType {
    INC,
    DEC,
}

type State = {
    count: number;
};

type Action = {
    type: CountType;
    payload: number;
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case CountType.INC: {
            return {
                ...state,
                count: state.count + action.payload,
            };
        }
        case CountType.DEC: {
            return {
                ...state,
                count: state.count - action.payload,
            };
        }
        default:
            return state;
    }
};

const Counter = () => {
    const [state, dispatch] = useMyReducer<State, Action>(reducer, {
        count: 0,
    });

    return (
        <div>
            <h1>{state.count}</h1>
            <button
                onClick={() => dispatch({ type: CountType.INC, payload: 1 })}
            >
                +
            </button>
            <button
                onClick={() => dispatch({ type: CountType.DEC, payload: 1 })}
            >
                -
            </button>
        </div>
    );
};

export default Counter;
