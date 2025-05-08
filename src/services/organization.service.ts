// services/organization.service.ts
import { validate } from 'class-validator';
import { AppDataSource } from '../config/typeorm.config';
import { Organization } from '../models/organization.entity';

export class OrganizationService {

  private organizationRepository = AppDataSource.getRepository(Organization);

  async createOrganization(name: string, legalEntity: string): Promise<Organization> {
    const newOrganization = new Organization();
    newOrganization.name = name;
    newOrganization.legalEntity = legalEntity;

    const errors = await validate(newOrganization);
    if (errors.length > 0) {
        console.log(errors);
        
      throw new Error('Validation failed');
    }

    await this.organizationRepository.save(newOrganization);
    return newOrganization;
  }

  async getOrganizations(): Promise<Organization[]> {
    return await this.organizationRepository.find();
  }

  
  async getOrganizationById(id: string): Promise<Organization | null> {
    
    return await this.organizationRepository.findOneBy({ id });
  }

  
  async updateOrganization(id: string, name?: string | null, legalEntity?: string | null): Promise<Organization | null> {

    const organization = await this.organizationRepository.findOne({
      where: { id }
    });

    if (!organization) {
      throw new Error('Organization not found');
    }

    if (name) organization.name = name;
    if (legalEntity) organization.legalEntity = legalEntity;

    await this.organizationRepository.save(organization);
    return organization;
  }

  async deleteOrganization(id: string): Promise<void> {
    const organization = await this.organizationRepository.findOne({
      where: { id }
    });

    if (!organization) {
      throw new Error('Organization not found');
    }

    await this.organizationRepository.remove(organization);
  }
}
