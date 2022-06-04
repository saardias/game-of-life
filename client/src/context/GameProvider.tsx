import React, { createContext, useState } from 'react';
import gameApi from '../api/game-api';
import { IError, IParent } from '../interfaces/common/base';

type ModeType = 'init' | 'readyToSet' | 'readyToStart' | 'running';
export interface IDimensions {
    row: number,
    columns: number
}

interface IGameContext {
    dimenstions?: IDimensions;
    mode?: ModeType;
    actions?: {
        setDimensions: (data: IDimensions) => void;
        setMode: (mode: ModeType) => void;
        setError: (error: IError | null) => void;
        resetGame: () => void
    },
    error?: IError | null
}

export const GameContext = createContext<IGameContext>({});
GameContext.displayName = 'GameManagement';

const GameProvider = ({ children }: IParent) => {
    const [dimenstions, setDimensions] = useState<IDimensions>({ row: 0, columns: 0 });
    const [mode, setMode] = useState<ModeType>('init');
    const [error, setError] = useState<IError | null>(null)

    const resetGame = () => {
        setDimensions({ row: 0, columns: 0 });
        setMode('readyToSet');
    }

    return (
        <GameContext.Provider
            value={{
                dimenstions,
                mode,
                error,
                actions: {
                    setDimensions,
                    setMode,
                    setError,
                    resetGame
                }
            }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider;