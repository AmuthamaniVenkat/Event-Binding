import { ActionReducer, Action } from '@ngrx/store';
import { Lead } from './lead';

export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const RESET = 'RESET';

export function counterReducer(state: Lead[]=[], action: Action) {
	switch (action.type) {
		case ADD:
			return [...state,action.payload];

		case UPDATE:
			return state.filter(lead => lead.id !== action.payload.id);

		default:
			return state;
	}
}
