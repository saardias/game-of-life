import { IThemed } from '../../common/base';
import { typography } from './../../../theme/theme';

export const TypographyVarientValues = [...Object.keys(typography.varient).map(key => key)];
export type TypographyVarient = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'button1' | 'button2' | 'subtitle1';
export type TypographyColors = 'primary' | 'secondery' | 'info' | 'light' | 'error';

export interface ITypographyProps extends IThemed {
    varient?: TypographyVarient,
    color?: TypographyColors,
    onClick?: () => void,
    disabled?: boolean
};