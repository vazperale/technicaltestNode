// controllers/organization.controller.ts
import { Request, Response } from 'express';
import { OrganizationService } from '../services/organization.service';
import { UpdateOrganizationDTO } from '../dtos/update-organization.dto';

const organizationService = new OrganizationService();

export const createOrganization = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, legalEntity } = req.body;
    const newOrganization = await organizationService.createOrganization(name, legalEntity);
    res.status(200).json({ success: true, data: newOrganization });
  } catch (error: unknown) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error instanceof Error ? error.message : error });
  }
};

export const getOrganizations = async (req: Request, res: Response): Promise<void> => {
  try {
    const organizations = await organizationService.getOrganizations();
    res.status(200).json({ success: true, data: organizations });
  } catch (error: unknown) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error instanceof Error ? error.message : error });
  }
};

export const getOrganizationById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const organization = await organizationService.getOrganizationById(id);
    if (!organization) {
      res.status(404).json({ success: false, message: 'Organization not found' });
      return;
    }
    res.status(200).json({ success: true, data: organization });
  } catch (error: unknown) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error instanceof Error ? error.message : error });
  }
};

export const updateOrganization = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const { id } = req.params;
    
    if (!id) {
      res.status(400).json({ success: false, message: "ID is required" });
      return;
    }

    const updateDTO = Object.assign(new UpdateOrganizationDTO(), req.body);
    
   if(Object.keys(updateDTO).length === 0){
    res.status(400).json({ success: false, message:"No data to update"});
   }
    
    const updatedOrganization = await organizationService.updateOrganization(id, updateDTO.name, updateDTO.legalEntity);
    res.status(200).json({ success: true, data: updatedOrganization });

  } catch (error: unknown) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error instanceof Error ? error.message : error });
  }
};

export const deleteOrganization = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    await organizationService.deleteOrganization(id);
    res.status(200).json({ success: true, message: `Organization with id ${id} deleted successfully` });
  } catch (error: unknown) {
    res.status(500).json({ success: false, message: 'Internal server error', error: error instanceof Error ? error.message : error });
  }
};
