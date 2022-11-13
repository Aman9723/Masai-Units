import { INC, DEC } from './counter.types';

export const increement = (payload = 1) => ({ type: INC, payload });

export const decreement = (payload = 1) => ({ type: DEC, payload });
