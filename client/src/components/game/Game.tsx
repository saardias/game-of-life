import React, { useCallback, useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { ApiContext } from '../../context/ApiProvider';
import CellProvider, { CellContext } from '../../context/CellProvider';
import { GameContext, IDimensions } from '../../context/GameProvider';
import theme from '../../theme/theme';
import { getId } from '../../utils/utils';
import { FlexColumnCentered, FlexRowWrapped } from '../containers/containers';
import { Button } from '../ui/Buttons';
import { CellBox } from './Cell';

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



    const onClick = useCallback((x: number, y: number) => {
        const listUpdate = { ...cellContext.livingCellsList } || {};
        const cellKey = `${x}-${y}`
        if (listUpdate[cellKey]) {
            delete listUpdate[cellKey];
        } else {
            listUpdate[cellKey] = true;
        }
        cellContext.actions?.setLivingCellList(listUpdate);
    }, [cellContext.livingCellsList])

    const rows = [];
    for (let i = 0; i < props.dimenstions.row; i++) {
        for (let j = 0; j < props.dimenstions.columns; j++) {
            rows.push(
                <CellBox
                    style={{
                        backgroundColor: cellContext?.livingCellsList && cellContext?.livingCellsList[`${i}-${j}`] ? theme.palette.primary.light : theme.palette.background.dark,
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


const Game = () => {
    const api = useContext(ApiContext);
    const gameManagement = useContext(GameContext);
    const cells = useContext(CellContext);

    useEffect(() => {
        if (gameManagement.mode === 'running') {
            const interval = setInterval(() => {
                if (cells.livingCellsList) {
                    api.game?.nextStage(cells.livingCellsList).then(({ payload }) => {
                        cells.actions?.setLivingCellList(payload.livingCells)
                    });
                }
            }, 300);

            return () => clearInterval(interval);
        }
    }, [api.game, cells.actions, cells.livingCellsList, gameManagement.mode]);

    const onNextStart = useCallback(() => {
        if (cells.livingCellsList) {
            api.game?.nextStage(cells.livingCellsList).then(({ payload }) => {
                cells.actions?.setLivingCellList(payload.livingCells)
            });
        }
    }, [api.game, cells.actions, cells.livingCellsList])

    const onResetClicked = () => {
        gameManagement.actions?.setMode('readyToSet')
        cells.actions?.setLivingCellList({})
    }

    const onStart = () => {
        gameManagement.actions?.setMode('running');
    };


    return (
        <FlexColumnCentered>
            <GameBoard dimenstions={gameManagement.dimenstions || { row: 0, columns: 0 }} />
            <FlexRowWrapped>
                <Button
                    onClick={onStart}
                    disabled={cells.livingCellsList && Object.keys(cells.livingCellsList).length === 0}>
                    Start
                </Button>
                <Button
                    onClick={onNextStart}
                    disabled={cells.livingCellsList && Object.keys(cells.livingCellsList).length === 0}>
                    Next
                </Button>
                <Button
                    onClick={onResetClicked}>
                    Reset
                </Button>
            </FlexRowWrapped>
        </FlexColumnCentered>

    )
}

export default Game;
