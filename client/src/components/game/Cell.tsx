import React, { memo, useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import CellProvider, { CellContext } from '../../context/CellProvider';
import { GameContext, IDimensions } from '../../context/GameProvider';
import { getId } from '../../utils/utils';
import { FlexColumnCentered, FlexRowWrapped } from '../containers/containers';
import { Button } from '../ui/Buttons';

interface ICellBoxProps {
    theme: any;
    disabled: boolean;
}

export const CellBox = styled.div`
    height: 20px;
    width: 20px;
    border: 0.5px solid #53504e;

`