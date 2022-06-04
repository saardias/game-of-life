import React, { createContext, useState } from 'react';
import gameApi from '../api/game-api';
import { IError, IParent } from '../interfaces/common/base';
import { ICell } from '../interfaces/models/game';

interface ICellContext {
    livingCellsList?: { [key: string]: boolean };
    actions?: {
        setLivingCellList: (cells: {}) => void;
        checkCell: (key: string) => boolean;
    },
}

export const CellContext = createContext<ICellContext>({});
CellContext.displayName = 'CellContext';

const CellProvider = ({ children }: IParent) => {
    const [livingCellsList, setLivingCellList] = useState<{ [key: string]: boolean }>({});

    const checkCell = (key: string) => {
        if (livingCellsList[key]) {
            return true;
        }
        return false;
    };

    return (
        <CellContext.Provider
            value={{
                livingCellsList,
                actions: {
                    setLivingCellList,
                    checkCell
                }
            }}>
            {children}
        </CellContext.Provider>
    )
}

export default CellProvider;