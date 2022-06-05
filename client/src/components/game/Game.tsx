import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ApiContext } from '../../context/ApiProvider';
import { CellContext } from '../../context/CellProvider';
import { GameContext } from '../../context/GameProvider';
import { IError } from '../../interfaces/common/base';
import { FlexColumnCentered, FlexRowWrapped } from '../containers/containers';
import { Button } from '../ui/Buttons';
import { Typography } from '../ui/Typography';
import GameBoard from './GameBoard';


const Game = () => {
    const api = useContext(ApiContext);
    const gameManagement = useContext(GameContext);
    const cells = useContext(CellContext);
    const [setps, setSteps] = useState(0);
    const [error, setError] = useState<IError | null>(null);
    const [showAllDeadPopup, setShowAllDeadPopup] = useState(false)

    useEffect(() => {
        if (gameManagement.mode === 'running') {
            const interval = setInterval(() => {
                if (gameManagement.afterFirstStep && cells.livingCellsList) {
                    if (Object.keys(cells.livingCellsList).length) {
                        onNext();
                    }
                } else {
                    doFirstStep();
                }
            }, 100);
            return () => clearInterval(interval);
        }
    }, [api.game, cells.actions, cells.livingCellsList, gameManagement.actions, gameManagement.afterFirstStep, gameManagement.mode]);

    useEffect(() => {
        if (showAllDeadPopup) {
            setShowAllDeadPopup(false)
            alert('All life is dead');
        }
    }, [showAllDeadPopup]);

    const onNextClicked = () => {
        if (gameManagement.afterFirstStep) {
            onNext();
        } else {
            doFirstStep();
        }
    };

    const onNext = useCallback(() => {
        if (cells.livingCellsList) {
            api.game?.nextStage().then(({ payload }) => {
                cells.actions?.setLivingCellList(payload.livingCells);
                setSteps(payload.steps);
                if (!Object.keys(payload.livingCells).length) {
                    onAllDeadCells();
                }
            }).catch((err) => {
                setError(err);
            });
        }
    }, [api.game, cells.actions, cells.livingCellsList, gameManagement.actions]);

    const doFirstStep = useCallback(() => {
        if (cells.livingCellsList) {
            api.game?.firstStage(cells.livingCellsList).then(({ payload }) => {
                cells.actions?.setLivingCellList(payload.livingCells);
                setSteps(payload.steps);
                gameManagement.actions?.setAfterFirstStep(true);
                if (!Object.keys(payload.livingCells).length) {
                    onAllDeadCells();
                }
            }).catch((err) => {
                setError(err);
            });
        }
    }, [api.game, cells.actions, cells.livingCellsList, gameManagement.actions]);


    const onReset = () => {
        api.game?.resetGame().then(({ payload }) => {
            if (payload.ok) {
                cells.actions?.setLivingCellList({});
                gameManagement.actions?.setAfterFirstStep(false);
                setSteps(0);
            }
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            gameManagement.actions?.setMode('ready');
        });

    }

    const onStartStopClicked = () => {
        if (error) {
            setError(null);
        }
        if (gameManagement.mode === 'running') {
            gameManagement.actions?.setMode('ready');
        } else {
            gameManagement.actions?.setMode('running');
        }
    };

    const onAllDeadCells = () => {
        onReset();
        console.log('XXXXX');
        setShowAllDeadPopup(true)
    }


    return (
        <FlexColumnCentered style={{ height: '100%', justifyContent: 'space-around' }}>
            <GameBoard dimenstions={gameManagement.dimenstions || { row: 0, columns: 0 }} />
            <Typography varient='h3'>
                {`Steps - ${setps || 0}`}
            </Typography>
            {
                error ?
                    <Typography color='error' varient='subtitle1'>
                        Something went wrong. Please try again.
                    </Typography>
                    : null
            }
            <FlexRowWrapped style={{ justifyContent: 'center' }}>
                <Button
                    style={{ width: '25%' }}
                    onClick={onStartStopClicked}
                    disabled={cells.livingCellsList && Object.keys(cells.livingCellsList).length === 0}>
                    {gameManagement.mode === 'running' ? 'Stop' : 'Start'}
                </Button>
                <Button
                    style={{ width: '25%' }}
                    onClick={onNextClicked}
                    disabled={cells.livingCellsList && Object.keys(cells.livingCellsList).length === 0}>
                    Next
                </Button>
                <Button
                    disabled={gameManagement.mode === 'running'}
                    style={{ width: '25%' }}
                    onClick={onReset}>
                    Reset
                </Button>
            </FlexRowWrapped>
        </FlexColumnCentered>

    )
}

export default Game;
