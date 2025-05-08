import express from 'express';
import { createChargePoint, getChargePoints, getChargePointById, updateChargePoint, deleteChargePoint } from '../controllers/chargepoint.controller';

const router = express.Router();

router.post('/chargepoints', createChargePoint);
router.get('/chargepoints', getChargePoints);
router.get('/chargepoints/:id', getChargePointById);
router.put('/chargepoints/:id', updateChargePoint);
router.delete('/chargepoints/:id', deleteChargePoint);

export default router;
