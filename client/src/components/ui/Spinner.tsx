import React from 'react';
import { GridLoader } from 'react-spinners';
import { ISpinnerProps } from '../../interfaces/components/ui';

import theme from '../../theme/theme';

const Spinner = (props: ISpinnerProps) => {
    return (
        <GridLoader
            loading={props.loading}
            size={props.size || 50}
            color={theme.palette.primary.light} />
    );
}

export default Spinner;