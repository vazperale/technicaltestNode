// src/controllers/chargepoint.controller.ts
import { Request, Response } from 'express';
import { ChargePointService } from '../services/chargepoint.service';
import {updateChargePointDto} from '../dtos/update-chargepoint.dto';

const chargePointService = new ChargePointService();


export const createChargePoint = async (req: Request, res: Response): Promise<void> => {
  try {
    const { identity, organizationId } = req.body;
    if(!organizationId){
        res.status(404).json({ message: 'OrganizationId not detected' });
    }
    const newChargePoint = await chargePointService.createChargePoint(identity, organizationId);
    res.status(201).json(newChargePoint);
  } catch (error: unknown) {
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : 'Internal Server Error' });
  }
};


export const getChargePoints = async (req: Request, res: Response): Promise<void> => {
  try {
    const chargePoints = await chargePointService.getChargePoints();
    res.status(200).json(chargePoints);
  } catch (error: unknown) {
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : 'Internal Server Error' });
  }
};


export const getChargePointById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const chargePoint = await chargePointService.getChargePointById(id);
    if (!chargePoint) {
      res.status(404).json({ message: 'ChargePoint not found' });
      return;
    }
    res.status(200).json(chargePoint);
  } catch (error: unknown) {
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : 'Internal Server Error' });
  }
};


export const updateChargePoint = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updateDTO = Object.assign(new updateChargePointDto(), req.body);
    
    if(Object.keys(updateDTO).length === 0){
        res.status(400).json({ success: false, message:"No data to update"});
       }

    const updatedChargePoint = await chargePointService.updateChargePoint(id, updateDTO.identity, updateDTO.organizationId);
    res.status(200).json(updatedChargePoint);
  } catch (error: unknown) {
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : 'Internal Server Error' });
  }
};


export const deleteChargePoint = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await chargePointService.deleteChargePoint(id);
    res.status(200).json({ success: true, message: `charge point with id ${id} deleted successfully` });
  } catch (error: unknown) {
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : 'Internal Server Error' });
  }
};
