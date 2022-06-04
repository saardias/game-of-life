import React, { createContext, useState } from 'react';
import { IParent } from '../interfaces/common/base';

interface ICellContext {
    livingCellsList?: { [key: string]: boolean };
    actions?: {
        setLivingCellList: (cells: {}) => void;
    },
}

export const CellContext = createContext<ICellContext>({});
CellContext.displayName = 'CellContext';

const CellProvider = ({ children }: IParent) => {
    const [livingCellsList, setLivingCellList] = useState<{ [key: string]: boolean }>({});

    return (
        <CellContext.Provider
            value={{
                livingCellsList,
                actions: {
                    setLivingCellList
                }
            }}>
            {children}
        </CellContext.Provider>
    )
}

export default CellProvider;