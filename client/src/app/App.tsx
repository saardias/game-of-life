import React, { useCallback, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FlexColumnCentered } from '../components/containers/containers';

import Layout from '../components/hoc/Layout';
import LoadingPage from '../components/LoadingPage';
import NavigationSwitch from '../components/navigation/NavigationSwitch';
import { Button } from '../components/ui/Buttons';
import { Typography } from '../components/ui/Typography';
import { ApiContext } from '../context/ApiProvider';
import CellProvider from '../context/CellProvider';
import { GameContext } from '../context/GameProvider';

function App() {
    const [reload, setReload] = useState(false);
    const gameManagment = useContext(GameContext);
    const api = useContext(ApiContext);

    useEffect(() => {
        if (gameManagment.mode === 'init') {
            initGame();
        }
    }, []);

    useEffect(() => {
        if (reload) {
            initGame();
            setReload(false);
        }
    }, [reload]);


    const initGame = useCallback(() => {
        api.game?.initGame().then(({ payload }) => {
            gameManagment.actions?.setDimensions(payload);
            gameManagment.actions?.setMode('ready');
        }).catch((err) => {
            gameManagment.actions?.setError(err);
        });
    }, [api.game, gameManagment.actions]);

    const onReloadClicked = () => {
        gameManagment.actions?.setError(null);
        setReload(true);
    }

    let view = (
        <LoadingPage />
    );

    if (gameManagment.error) {
        view = (
            <FlexColumnCentered style={{ height: '100%' }}>
                <Typography varient='body1'>
                    Something went wrong.
                </Typography>

                <Button
                    size='large'
                    onClick={onReloadClicked}
                    style={{ maxWidth: '20%', margin: '5%' }}>
                    Try again
                </Button>
            </FlexColumnCentered>
        )
    }

    if (gameManagment.mode === 'ready' || gameManagment.mode === 'running') {
        view = (
            <CellProvider>
                <Router>
                    <Layout>
                        <NavigationSwitch />
                    </Layout>
                </Router>
            </CellProvider>
        );
    }

    return (
        view
    );
}

export default App;
