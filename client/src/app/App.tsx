import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '../components/hoc/Layout';
import NavigationSwitch from '../components/navigation/NavigationSwitch';

function App() {

    let view = (
        <Router>
            <Layout>
                <NavigationSwitch />
            </Layout>
        </Router>
    )
    return (
        view
    );
}

export default App;
