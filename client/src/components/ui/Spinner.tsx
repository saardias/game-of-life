import React, { CSSProperties } from 'react';
import { SpinnerCircular } from 'spinners-react';
import { useTheme } from 'styled-components';

interface ISpinnerProps {
    style?: CSSProperties,
    size?: number | string,
    loading?: boolean
}
const Spinner = (props: ISpinnerProps) => {
    const theme = useTheme()
    return (
        <SpinnerCircular
            enabled={props.loading}
            size={props.size || 50}
            style={{ color: theme.palette.primary.main, ...props.style }} />
    );
}

export default Spinner;