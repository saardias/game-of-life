import express, { Application, ErrorRequestHandler, Request, Response } from 'express';
import cors from 'cors';
import apiRoutes from '../routes/api';
import routes from '../routes';

const errorHandler: ErrorRequestHandler = (err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'dev' ? err : {};
    console.error('[Server] ', err);

    res.status(err.status || 500);
    res.send(err);
};

export const configExpressRoutes = (app: Application) => {
    app.use('/api', apiRoutes);
    app.use('/', routes);

    app.use((req: Request, res: Response) => {
        res.status(404).send({ error: "API Not Found" });
    });
    app.use(errorHandler);
}

export const configExpressMiddlewares = (app: Application) => {
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json())
}
