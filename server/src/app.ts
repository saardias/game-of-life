import express, { Express } from 'express';
import * as configs from './config/config';

import environment from './environments/env';
const env = environment();

class Server {
    configs: typeof configs;
    app: Express;

    constructor() {
        this.configs = configs;
        this.app = express();
        console.log(env.serverName + ' server v' + env.serverVersion);
        console.log('Starting server...');
        this.init();
    }

    async init() {
        this.configs.configExpressMiddlewares(this.app);
        this.configs.configExpressRoutes(this.app);
        // start server
        this.app.listen(env.port, () => {
            console.log(`Listening on port ${env.port}`);
        });

    }
}

new Server().app;