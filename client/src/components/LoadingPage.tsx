import React from 'react'

import { FlexColumnCentered } from './containers/containers';
import Spinner from './ui/Spinner';


const LoadingPage = () => {

    return (
        <FlexColumnCentered style={{ height: '100%' }}>
            <Spinner />
        </FlexColumnCentered>
    )
}

export default LoadingPage;
