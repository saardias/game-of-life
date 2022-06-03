import { CSSProperties } from 'react';
import { ThemeType } from '../../theme/theme';

export interface IUnique {
    _id: string;
}

export interface IError {
    message: string;
    [key: string]: any;
}

export interface IThemed {
    theme: ThemeType;
}

export interface IStyled {
    style?: CSSProperties;
}

export interface IParent {
    children: any;
};

export interface IBaseResponse {
    error?: any,
    status?: number,
    data?: any
};