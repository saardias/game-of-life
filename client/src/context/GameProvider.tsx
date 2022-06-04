import React, { createContext, useState } from 'react';
import { IError, IParent } from '../interfaces/common/base';
import { IDimensions } from '../interfaces/models/game';

type ModeType = 'init' | 'ready' | 'running';

interface IGameContext {
    dimenstions?: IDimensions;
    mode?: ModeType;
    afterFirstStep?: boolean
    actions?: {
        setDimensions: (data: IDimensions) => void;
        setMode: (mode: ModeType) => void;
        setError: (error: IError | null) => void;
        resetGame: () => void;
        setAfterFirstStep: (data: boolean) => void
    },
    error?: IError | null
}

export const GameContext = createContext<IGameContext>({});
GameContext.displayName = 'GameManagement';

const GameProvider = ({ children }: IParent) => {
    const [dimenstions, setDimensions] = useState<IDimensions>({ row: 0, columns: 0 });
    const [mode, setMode] = useState<ModeType>('init');
    const [afterFirstStep, setAfterFirstStep] = useState<boolean>(false);
    const [error, setError] = useState<IError | null>(null);

    const resetGame = () => {
        setDimensions({ row: 0, columns: 0 });
        setMode('ready');
    }

    return (
        <GameContext.Provider
            value={{
                dimenstions,
                mode,
                error,
                afterFirstStep,
                actions: {
                    setDimensions,
                    setMode,
                    setError,
                    resetGame,
                    setAfterFirstStep
                }
            }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider;