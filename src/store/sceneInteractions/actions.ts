import { SCENE_INTERACTIONS } from './types';


export function setMasterScale(masterScale: number) {
	return {
		type: SCENE_INTERACTIONS.SET_MASTER_SCALE,
		payload: { masterScale }
	}
}

export function setConsoleMessage(consoleMessage: string) {
	return {
		type: SCENE_INTERACTIONS.SET_CONSOLE_MESSAGE,
		payload: { consoleMessage }
	}
}

export function setPlayerPosition(playerPosition: string) {
	return {
		type: SCENE_INTERACTIONS.SET_PLAYER_POSITION,
		payload: { playerPosition }
	}
}

export function setObjectPlaced(objectPlaced: boolean) {
	return {
		type: SCENE_INTERACTIONS.SET_OBJECT_PLACED,
		payload: { objectPlaced }
	}
}

export function setPresenting(presenting: boolean) {
	return {
		type: SCENE_INTERACTIONS.SET_PRESENTING,
		payload: { presenting }
	}
}

export function error(err: any) {
	return {
		type: SCENE_INTERACTIONS.ERROR,
		payload: { err }
	}
}
