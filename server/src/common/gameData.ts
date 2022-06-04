import environment from '../environments/env';
const env = environment();

interface IGameMetadata {
    numOfRows: number;
    numOfColumns: number;
}
interface ICell {
    x: number,
    y: number
}

interface ICellsMap {
    [key: string]: boolean
}

class PrivateGameData {
    metadata: IGameMetadata;
    livingCells: ICellsMap;
    steps: number

    constructor() {
        this.metadata = {
            numOfColumns: env.numOfColumns,
            numOfRows: env.numOfRows
        }
        this.steps = 0;
    }

    getMetadata() {
        return this.metadata;
    }

    getLivingCells() {
        return this.livingCells;
    }

    reset() {
        this.livingCells = {};
        this.steps = 0;
    }

}

class GameData {
    private static instance: PrivateGameData;

    static getInstance() {
        if (!this.instance) {
            this.instance = new PrivateGameData();
        }
        return this.instance;
    }

}

export default GameData;