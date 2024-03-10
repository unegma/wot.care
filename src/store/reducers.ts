import sceneInteractionsReducer from './sceneInteractions';
import {IState} from './types';

import { logger } from './middlewares';

export const initialState: IState = {
	sceneInteractions: sceneInteractionsReducer.initialState
}

export default function mainReducer(state: IState, action: object) {
	// Receiving previous state here
	const { sceneInteractions } = state;

	// Receiving current state here
	const currentState = {
		sceneInteractions: sceneInteractionsReducer.reducer(sceneInteractions, action)
	};

	// Middlewares
	// logger(action, state, currentState);

	return currentState;
}
