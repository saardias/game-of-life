import React, { useCallback, useContext } from 'react'
import { CellContext } from '../../context/CellProvider';
import { GameContext } from '../../context/GameProvider';
import { IGameBoardProps } from '../../interfaces/models/game';
import theme from '../../theme/theme';
import { CellBox, Grid } from './GridComponents';

const GameBoard = (props: IGameBoardProps) => {
    const cellContext = useContext(CellContext);
    const { mode, afterFirstStep, actions } = useContext(GameContext);

    const onClick = useCallback((x: number, y: number) => {
        if (mode === 'running') {
            return;
        }
        if (afterFirstStep) {
            actions?.setAfterFirstStep(false);
        }
        const listUpdate = { ...cellContext.livingCellsList } || {};
        const cellKey = `${x}-${y}`
        if (listUpdate[cellKey]) {
            delete listUpdate[cellKey];
        } else {
            listUpdate[cellKey] = true;
        }
        cellContext.actions?.setLivingCellList(listUpdate);
    }, [cellContext.actions, cellContext.livingCellsList])

    const rows = [];
    for (let i = 0; i < props.dimenstions.row; i++) {
        for (let j = 0; j < props.dimenstions.columns; j++) {
            rows.push(
                <CellBox
                    style={{
                        backgroundColor: cellContext?.livingCellsList && cellContext?.livingCellsList[`${i}-${j}`] ? theme.palette.primary.light : theme.palette.background.dark,
                        cursor: mode === 'running' ? 'default' : 'pointer'
                    }}
                    onClick={() => { onClick(i, j) }}
                    key={`${i},${j}`} />
            )
        }
    };

    return (
        <Grid numCols={props.dimenstions.columns}>
            {rows}
        </Grid>
    )
}

export default GameBoard;