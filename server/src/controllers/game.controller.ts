import { Request, Response } from 'express';
import * as gameServices from '../services/game.services';

export const getGameMetadata = async (req: Request, res: Response) => {
    console.log(`Controller - Get initial game metadata`);
    const response = await gameServices.getGameMetadata();
    res.status(response.status).send(response.data);
}

export const getNextStage = async (req: Request, res: Response) => {
    console.log(`Controller - Get next stage`);
    const livingCells = req.body.livingCells;
    console.log('livingCells', livingCells)
    const response = await gameServices.getNextStage(livingCells);
    res.status(response.status).send(response.data);
}