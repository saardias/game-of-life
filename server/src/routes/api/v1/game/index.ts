import express from 'express';
const router = express.Router();

import * as gameController from '../../../../controllers/game.controller';
import * as gameServicess from '../../../../services/game.services';

router.get('/', (req, res) => { res.send('TESTING!'); });
router.get('/init', gameController.getGameMetadata, gameServicess.getGameMetadata);
router.put('/first', gameController.getFirstStage, gameServicess.getFirstStage);
router.put('/next', gameController.getNextStage, gameServicess.getNextStage);
router.put('/reset', gameController.reset, gameServicess.reset);

export default router;