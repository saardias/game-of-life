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

class PrivateGameData {
    metadata: IGameMetadata;
    livingCells: ICell[];

    constructor() {
        this.metadata = {
            numOfColumns: env.numOfColumns,
            numOfRows: env.numOfRows
        }
    }

    getMetadata() {
        return this.metadata;
    }

    getLivingCells() {
        return this.livingCells;
    }

    reset() {
        this.livingCells = [];
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