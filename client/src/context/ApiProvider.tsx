import { rejects } from 'assert';
import { resolve } from 'path';
import React, { createContext, useState } from 'react';
import gameApi from '../api/game-api';
import { IError, IParent } from '../interfaces/common/base';

interface IApiContext {
    game?: {
        initGame: () => Promise<IActionResponse>;
        nextStage: (livingCells: { [key: string]: boolean }) => Promise<IActionResponse>;
        // resetGame: () => Promise<IActionResponse>
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

    const nextStage = (livingCells: { [key: string]: boolean }) => {
        return new Promise<IActionResponse>(async (resolve, rejects) => {
            try {
                const { data, status, error } = await gameApi.getNextStage(livingCells);
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
                    nextStage
                    // resetGame
                }
            }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider;