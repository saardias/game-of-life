import React from 'react';
import styled from 'styled-components';
import { ITypographyProps } from '../../interfaces/components/ui';

export const Typography = styled.p<ITypographyProps>((props: ITypographyProps) => {
    const varient = props.varient || 'h1';
    return `
        pointer-events: none;
        cursor:${props.onClick && !props.disabled ? 'pointer' : 'default'};
        margin: 0;
        color: ${(props.color && props.theme.palette.typography[props.color]) || props.theme.typography.varient[varient].color};
        font-size: ${props.theme.typography.varient[varient].fontSize};
        font-weight: ${props.theme.typography.varient[varient].fontWeight};
    `
});