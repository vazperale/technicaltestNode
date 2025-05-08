import express from 'express';
import { createOrganization, getOrganizations, getOrganizationById, updateOrganization, deleteOrganization } from '../controllers/organization.controller';

const router = express.Router();

router.post('/organizations', createOrganization);
router.get('/organizations', getOrganizations);
router.get('/organizations/:id',getOrganizationById);
router.put('/organizations/:id', updateOrganization);
router.delete('/organizations/:id', deleteOrganization);

export default router;
