import { INC, DEC, ADD_TODO } from './actionTypes';

export const increement = (payload = 1) => ({ type: INC, payload });

export const decreement = (payload = 1) => ({ type: DEC, payload });

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
