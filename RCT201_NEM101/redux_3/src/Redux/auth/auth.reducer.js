import { LOG_IN, LOG_OUT } from './auth.types';

let initialState = {
    isAuthorized: false,
};

export const authReducer = (state = initialState, { type }) => {
    switch (type) {
        case LOG_IN:
            return {
                ...state,
                isAuthorized: true,
            };
        case LOG_OUT:
            return {
                ...state,
                isAuthorized: false,
            };
        default:
            return state;
    }
};
