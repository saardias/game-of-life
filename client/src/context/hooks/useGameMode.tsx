
import { useContext } from 'react';
import { GameContext } from '../GameProvider';

const useGameMode = () => {
    const { mode, actions } = useContext(GameContext);
    return [mode, actions?.setMode];
}
export default useGameMode;