import { Request, Response } from 'express';
import * as gameServices from '../services/game.services';

export const getGameMetadata = async (req: Request, res: Response) => {
    console.info(`Controller - Get initial game metadata`);

    const response = await gameServices.getGameMetadata();
    res.status(response.status).send(response.data);
}

export const getFirstStage = async (req: Request, res: Response) => {
    console.info(`Controller - Get first stage`);

    const livingCells = req.body.livingCells;
    const response = await gameServices.getFirstStage(livingCells);
    res.status(response.status).send(response.data);
}

export const getNextStage = async (req: Request, res: Response) => {
    console.info(`Controller - Get next stage`);

    const response = await gameServices.getNextStage();
    res.status(response.status).send(response.data);
}

export const reset = async (req: Request, res: Response) => {
    console.info(`Controller - reset`);

    const response = await gameServices.reset();
    res.status(response.status).send(response.data);
}