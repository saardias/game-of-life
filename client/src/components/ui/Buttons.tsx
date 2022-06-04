import React from 'react';
import styled from 'styled-components';
import { IButtonProps } from '../../interfaces/components/ui';

export const Button = styled.button<IButtonProps>`
    cursor: pointer;
    border: none;
    min-width: 190px;
    height:  ${props => props.theme.buttons.size[props.size || 'small']};
    width: ${props => props.width ? `${props.width}px` : '100%'};
    padding: 0 35px;
    margin: 5px;
    text-align: center;
    border-radius: 4px;
    &:focus {
        outline: none;
	}
    &:disabled {
        cursor: default;
		&:hover {
            background-color: ${props => props.theme.palette.background.disable};
		}
            background-color: ${props => props.theme.palette.background.disable};
        color: ${props => props.theme.palette.typography.secondery};
	}
    ${props => {
        switch (props.varient) {
            case 'primary':
                return props.theme.buttons.varient.primary;
            case 'secondery':
                return props.theme.buttons.varient.secondery;
            default:
                return props.theme.buttons.varient.primary;
        }
    }}
    &:hover {
        background-color: ${props => props.theme.palette[props.varient || 'primary'].light};
    }
`