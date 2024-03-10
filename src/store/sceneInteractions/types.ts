export interface ISceneInteractions {
  masterScale: number;
  consoleMessage: string;
  playerPosition: any; // todo change to typle?? [0,0,0]
  objectPlaced: boolean;
  presenting: boolean;
}

export enum SCENE_INTERACTIONS {
  SET_MASTER_SCALE = 'SET_MASTER_SCALE',
  SET_CONSOLE_MESSAGE = 'SET_CONSOLE_MESSAGE',
  SET_PLAYER_POSITION = 'SET_PLAYER_POSITION',
  SET_OBJECT_PLACED = 'SET_OBJECT_PLACED',
  SET_PRESENTING = 'SET_PRESENTING',
  ERROR = 'ERROR',
}
