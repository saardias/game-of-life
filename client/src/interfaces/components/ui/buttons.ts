import { FunctionComponent } from 'react';
import { CSSProperties } from 'styled-components';
import { TypographyColors } from './Typography';
import { IThemed } from "../../common/base";

export type ButtonSize = 'small' | 'large';
export type ButtonVarient = 'primary' | 'secondery';

export interface IButtonProps extends IThemed {
    size?: ButtonSize,
    width?: number,
    varient?: ButtonVarient
};

export interface IIconButton {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    containerStyles?: CSSProperties,
    disabled?: boolean,
    color?: TypographyColors
}
