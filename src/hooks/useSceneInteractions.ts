import { useGlobalStore } from '../store';

import bindActions from '../store/bindActions';
import sceneInteractionsReducer from '../store/sceneInteractions';

const { actions } = sceneInteractionsReducer;

/**
 * useItems Custom Hook
 */
const useSceneInteractions: any = () => {
  // console.log('------ useSceneInteractions.ts ------');
  // console.log('useGlobalStore', useGlobalStore)

  const { state, dispatch } = useGlobalStore();

  // console.log('state', state)
  // console.log('dispatch', dispatch)

  // List of Props
  const { sceneInteractions } = state;

  // List of Actions
  const {
    setMasterScale,
    setConsoleMessage,
    setPlayerPosition,
    setObjectPlaced,
    setPresenting
  } = actions;

  // Bind Actions
  const sceneInteractionsActions = bindActions({
    setMasterScale,
    setConsoleMessage,
    setPlayerPosition,
    setObjectPlaced,
    setPresenting
  }, dispatch);

  return { ...sceneInteractions, ...sceneInteractionsActions };
}

export default useSceneInteractions;
