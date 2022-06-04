import { CSSProperties } from "react";
import { IThemed } from "../common/base";

export interface ISpinnerProps {
    style?: CSSProperties,
    size?: number | string,
    loading?: boolean
};

export type ButtonSize = 'small' | 'large';
export type ButtonVarient = 'primary' | 'secondery';
export interface IButtonProps extends IThemed {
    size?: ButtonSize,
    width?: number,
    varient?: ButtonVarient
};

export type TypographyVarient = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'button1' | 'button2' | 'subtitle1';
export type TypographyColors = 'primary' | 'secondery' | 'info' | 'light' | 'error';
export interface ITypographyProps extends IThemed {
    varient?: TypographyVarient,
    color?: TypographyColors,
    onClick?: () => void,
    disabled?: boolean
};