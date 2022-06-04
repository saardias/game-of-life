import GameData from '../common/gameData';
import { responseSuccess } from '../common/service-response';

export const getGameMetadata = async () => {
    console.log(`Service - Get initial game metadata`);
    const game = GameData.getInstance();
    return responseSuccess(game.getMetadata())
}

const getCellNeighbors = (cell: { x: number, y: number }, maxRow: number, maxColumns: number): { [key: string]: boolean } => {
    const cells = {};
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            const currentX = cell.x + i;
            const currentY = cell.y + j;
            if (currentX === cell.x && currentY === cell.y) {
                continue;
            }
            if (currentX >= 0 && currentY >= 0 && currentX < maxColumns && currentY < maxRow) {
                cells[`${currentX}-${currentY}`] = true;
            }

        }
    }
    return cells;
};

const getLocation = (cell: string) => {
    const [x, y] = cell.split('-');
    return { x: parseInt(x), y: parseInt(y) };
};

const getCellNextStageStatus = (cell: { x: number, y: number }, livingCells: { [key: string]: boolean }, maxRow: number, maxColumns: number) => {
    let numOfLivingNeighbors = 0;
    const currenStatus = livingCells[`${cell.x}-${cell.y}`] || false;

    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            const currentX = cell.x + i;
            const currentY = cell.y + j;
            if (currentX === cell.x && currentY === cell.y) {
                continue;
            }

            if (currentX >= 0 && currentY >= 0 && currentX < maxColumns && currentY < maxRow) {
                if (livingCells[`${currentX}-${currentY}`]) {
                    numOfLivingNeighbors++;
                }
            }
        }
    }

    if (currenStatus && (numOfLivingNeighbors === 3 || numOfLivingNeighbors === 2)) {
        return true;
    }
    if (!currenStatus && numOfLivingNeighbors === 3) {
        return true;
    }
    return false

}

export const getFirstStage = async (livingCells: { [key: string]: boolean }) => {
    console.log(`Service - Get fist stage`);
    const game = GameData.getInstance();
    const dimensions = game.getMetadata();
    const currentLivingCells = Object.keys(livingCells).map((cell) => getLocation(cell));
    const neighbors = currentLivingCells.map((cell) => getCellNeighbors(cell, dimensions.numOfRows, dimensions.numOfColumns))
    let neighborsFlat = {};
    for (const cells of neighbors) {
        neighborsFlat = { ...neighborsFlat, ...cells }
    }
    const allCellsToCheck = { ...neighborsFlat, ...livingCells };
    const livingCellsNextStage = {};
    for (const cell in allCellsToCheck) {
        if (getCellNextStageStatus(getLocation(cell), livingCells, dimensions.numOfRows, dimensions.numOfColumns)) {
            livingCellsNextStage[cell] = true;
        }
    }

    game.steps++;
    game.livingCells = livingCellsNextStage;

    return responseSuccess({
        livingCells: livingCellsNextStage,
        steps: game.steps
    })
}


export const getNextStage = async () => {
    console.log(`Service - Get next stage`);
    const game = GameData.getInstance();
    const dimensions = game.getMetadata();
    const livingCells = game.livingCells;
    const currentLivingCells = Object.keys(livingCells).map((cell) => getLocation(cell));
    const neighbors = currentLivingCells.map((cell) => getCellNeighbors(cell, dimensions.numOfRows, dimensions.numOfColumns))
    let neighborsFlat = {};
    for (const cells of neighbors) {
        neighborsFlat = { ...neighborsFlat, ...cells }
    }

    const allCellsToCheck = { ...neighborsFlat, ...livingCells };

    const livingCellsNextStage = {};

    for (const cell in allCellsToCheck) {
        if (getCellNextStageStatus(getLocation(cell), livingCells, dimensions.numOfRows, dimensions.numOfColumns)) {
            livingCellsNextStage[cell] = true;
        }
    }

    game.steps++;
    game.livingCells = livingCellsNextStage;

    return responseSuccess({
        livingCells: livingCellsNextStage,
        steps: game.steps
    })
}

export const reset = async () => {
    console.log(`Service - reset`);
    const game = GameData.getInstance();

    game.reset();

    return responseSuccess({ ok: 1 })
}