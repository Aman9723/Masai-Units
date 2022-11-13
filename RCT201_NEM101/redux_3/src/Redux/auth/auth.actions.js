import { LOG_IN, LOG_OUT } from './auth.types';

export const login = () => ({
    type: LOG_IN,
});

export const logout = () => ({
    type: LOG_OUT,
});
