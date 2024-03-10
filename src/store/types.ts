import {ISceneInteractions} from "./sceneInteractions/types";

export interface IState {
  sceneInteractions: ISceneInteractions;
}

export interface IContextProps {
  state: any;
  dispatch: any;
}
