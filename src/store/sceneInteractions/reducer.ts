import { ISceneInteractions, SCENE_INTERACTIONS } from './types';
import {useState} from "react";

// const INITIAL_HELPER_TEXT = "Controls: ⚲ or ↺ or ⇉ Model";
const INITIAL_HELPER_TEXT = "Double Click to set Rotation Point";

export const initialState: ISceneInteractions = {
  masterScale: 1,
  consoleMessage: "",
  playerPosition: {x:0, y: 0, z: 0},
  objectPlaced: false,
  presenting: false // not calling this isPresenting as this is part of the useXR hook
}

export default function sceneInteractions(state = initialState, action: any) {
  switch (action.type) {
    case SCENE_INTERACTIONS.SET_MASTER_SCALE:
      return {
        ...state,
        error: '',
        masterScale: action.payload.masterScale
      };
    case SCENE_INTERACTIONS.SET_CONSOLE_MESSAGE:
      return {
        ...state,
        error: '',
        consoleMessage: action.payload.consoleMessage
      };
    case SCENE_INTERACTIONS.SET_PLAYER_POSITION:
      return {
        ...state,
        error: '',
        playerPosition: action.payload.playerPosition
      };
    case SCENE_INTERACTIONS.SET_OBJECT_PLACED:
      return {
        ...state,
        error: '',
        objectPlaced: action.payload.objectPlaced
      };
    case SCENE_INTERACTIONS.SET_PRESENTING:
      return {
        ...state,
        error: '',
        presenting: action.payload.presenting
      };
    default: {
      return state;
    }
  }
}
