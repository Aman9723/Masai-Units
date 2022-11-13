import { useState } from 'react';

// type for reducerFn, initialState, action, return

export const useMyReducer = <T, U>(reducerFn: Function, initialState: T) => {
    const [state, setState] = useState<T>(initialState);

    const dispatch = (action: U) => {
        let updatedState = reducerFn(state, action);
        setState(updatedState);
    };

    return [state, dispatch];
};
