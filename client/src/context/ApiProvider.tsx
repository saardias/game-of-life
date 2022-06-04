import React, { createContext } from 'react';
import gameApi from '../api/game-api';
import { IError, IParent } from '../interfaces/common/base';

interface IApiContext {
    game?: {
        initGame: () => Promise<IActionResponse>;
        firstStage: (livingCells: { [key: string]: boolean }) => Promise<IActionResponse>;
        nextStage: () => Promise<IActionResponse>;
        resetGame: () => Promise<IActionResponse>;
    }
}
interface IActionResponse {
    payload?: any,
    error?: IError
}

export const ApiContext = createContext<IApiContext>({});
ApiContext.displayName = 'ApiContext';

const ApiProvider = ({ children }: IParent) => {

    const resetGame = () => {
        return new Promise<IActionResponse>(async (resolve, rejects) => {
            try {
                const { data, status, error } = await gameApi.reset();
                if (status === 200 && data) {
                    resolve({
                        payload: { ok: 1 }
                    })
                }
                if (error) {
                    rejects(error)
                }
            } catch (error: any) {
                rejects(error)
            }
        })
    };

    const initGame = () => {
        return new Promise<IActionResponse>(async (resolve, rejects) => {
            try {
                const { data, status, error } = await gameApi.getGameMetadata();
                if (status === 200 && data) {
                    resolve({
                        payload: { row: data.numOfRows, columns: data.numOfColumns }
                    })
                }
                if (error) {
                    rejects(error)
                }
            } catch (error: any) {
                rejects(error)
            }
        })
    }

    const firstStage = (livingCells: { [key: string]: boolean }) => {
        return new Promise<IActionResponse>(async (resolve, rejects) => {
            try {
                const { data, status, error } = await gameApi.getFirstStage(livingCells);
                if (status === 200 && data) {
                    resolve({
                        payload: data
                    })
                }
                if (error) {
                    rejects(error)
                }
            } catch (error: any) {
                rejects(error)
            }
        })
    }

    const nextStage = () => {
        return new Promise<IActionResponse>(async (resolve, rejects) => {
            try {
                const { data, status, error } = await gameApi.getNextStage();
                if (status === 200 && data) {
                    resolve({
                        payload: data
                    })
                }
                if (error) {
                    rejects(error)
                }
            } catch (error: any) {
                rejects(error)
            }
        })
    }

    return (
        <ApiContext.Provider
            value={{
                game: {
                    initGame,
                    firstStage,
                    resetGame,
                    nextStage
                }
            }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider;