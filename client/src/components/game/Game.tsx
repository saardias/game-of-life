import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import CellProvider, { CellContext } from '../../context/CellProvider';
import { GameContext, IDimensions } from '../../context/GameProvider';
import { getId } from '../../utils/utils';
import { FlexColumnCentered, FlexRowWrapped } from '../containers/containers';
import { Button } from '../ui/Buttons';
import Cell from './Cell';

interface IGameBoardProps {
    dimenstions: IDimensions;
};

const Grid = styled.div((props: { numCols: number }) => {
    return `
        display: grid;
        grid-template-columns: repeat(${props.numCols}, 20px);
        width: fit-content;
        margin: 0 auto;
    `
})

const GameBoard = (props: IGameBoardProps) => {
    const cellContext = useContext(CellContext);

    const onClick = (x: number, y: number) => {
        const listUpdate = { ...cellContext.livingCellsList } || {};
        const cellKey = `${x}-${y}`
        if (listUpdate[cellKey]) {
            delete listUpdate[cellKey];
        } else {
            listUpdate[cellKey] = true;
        }
        cellContext.actions?.setLivingCellList(listUpdate);
    };

    const rows = [];
    for (let i = 0; i < props.dimenstions.row; i++) {
        for (let j = 0; j < props.dimenstions.columns; j++) {
            rows.push(
                <Cell
                    disabled={false}
                    alive={(cellContext?.livingCellsList && cellContext?.livingCellsList[`${i}-${j}`]) || false}
                    onClick={() => { onClick(i, j) }}
                    x={i}
                    y={j}
                    key_t={`${i}_${j}`}
                    key={`${i}${j}-${getId()}`} />
            )
        }
    };

    return (
        <Grid numCols={props.dimenstions.columns}>
            {rows}
        </Grid>
    )
}


const Game = () => {
    const gameManagement = useContext(GameContext);
    const cells = useContext(CellContext);

    return (
        <FlexColumnCentered>
            <GameBoard dimenstions={gameManagement.dimenstions || { row: 0, columns: 0 }} />
            <FlexRowWrapped>
                <Button
                    disabled={cells.livingCellsList && Object.keys(cells.livingCellsList).length === 0}>
                    Start
                </Button>
                <Button
                    disabled={gameManagement.mode !== 'readyToStart'}>
                    Next
                </Button>
                <Button
                    disabled={gameManagement.mode !== 'readyToStart'}>
                    Reset
                </Button>
            </FlexRowWrapped>
        </FlexColumnCentered>

    )
}

export default Game;
