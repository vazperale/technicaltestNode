// src/services/chargepoint.service.ts
import { validate } from 'class-validator';
import { AppDataSource } from '../config/typeorm.config';
import { ChargePoint } from '../models/chargepoint.entity';
import { Organization } from '../models/organization.entity';

export class ChargePointService {
  private chargePointRepository = AppDataSource.getRepository(ChargePoint);
  private organizationRepository = AppDataSource.getRepository(Organization);

  async createChargePoint(identity: string, organizationId: string) {
    const organization = await this.organizationRepository.findOneBy({ id: organizationId });
    if (!organization) {
      throw new Error('Organization not found');
    }

    const newChargePoint = new ChargePoint();
    newChargePoint.identity = identity;
    newChargePoint.cpo = organization;

    return this.chargePointRepository.save(newChargePoint);
  }

  async getChargePoints() {
    return this.chargePointRepository.find({ relations: ['cpo'] });
  }

  async getChargePointById(id: string) {
    return this.chargePointRepository.findOne({
      where: { id },
      relations: ['cpo'],
    });
  }

  async updateChargePoint(id: string, identity: string, organizationId: string) {
    const chargePoint = await this.chargePointRepository.findOne({
      where: { id },
      relations: ['cpo'],
    });
    if (!chargePoint) {
      throw new Error('ChargePoint not found');
    }

    const organization = await this.organizationRepository.findOneBy({ id: organizationId });
    if (!organization) {
      throw new Error('Organization not found');
    }

    chargePoint.identity = identity;
    chargePoint.cpo = organization;
    
    return this.chargePointRepository.save(chargePoint);
  }

  async deleteChargePoint(id: string) {
    const chargePoint = await this.chargePointRepository.findOneBy({ id });
    if (!chargePoint) {
      throw new Error('ChargePoint not found');
    }

    await this.chargePointRepository.remove(chargePoint);
  }
}
