import React, { memo, useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import CellProvider, { CellContext } from '../../context/CellProvider';
import { GameContext, IDimensions } from '../../context/GameProvider';
import { getId } from '../../utils/utils';
import { FlexColumnCentered, FlexRowWrapped } from '../containers/containers';
import { Button } from '../ui/Buttons';

interface ICellProps {
    x: number;
    y: number;
    alive: boolean;
    disabled: boolean;
    key_t: string;
    onClick: () => void;
};
interface ICellBoxProps {
    theme: any;
    alive: boolean;
    disabled: boolean;
}

const CellBox = styled.div((props: ICellBoxProps) => {
    return (
        `
            cursor: ${props.disabled ? 'default' : 'pointer'};
            height: 20px;
            width: 20px;
            background-color: ${props.theme.palette.background.dark};
            border: 0.5px solid #53504e;

            &.filled {
                background-color: ${props.theme.palette.primary.main};
            }

            &::disabled {
                cursor: default;
            }
        `
    )
})


const Cell = memo((props: ICellProps) => {
    // console.log('cell', props.key_t)
    return (
        <CellBox
            disabled={props.disabled}
            className={props.alive ? 'filled' : ''}
            onClick={props.onClick}
            alive={props.alive}>
            <div style={{ fontSize: 9 }}>{props.x + '-' + props.y}</div>
        </CellBox>
    )
});


const areEqual = (prevProps: ICellProps, nextProps: ICellProps) => {
    if (prevProps.alive !== nextProps.alive) { return false }
    if (prevProps.disabled !== nextProps.disabled) { return false }
    return true;
}
const MemoCell = React.memo(Cell, areEqual)

export default MemoCell;