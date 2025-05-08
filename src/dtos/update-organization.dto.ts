import { IsOptional } from 'class-validator';

export class UpdateOrganizationDTO {
  @IsOptional()
  name?: string;

  @IsOptional()
  legalEntity?: string;
}