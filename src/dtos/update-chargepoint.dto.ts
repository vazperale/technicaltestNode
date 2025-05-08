import { IsOptional } from 'class-validator';

export class updateChargePointDto {
  @IsOptional()
  identity?: string;

  @IsOptional()
  organizationId?: string;
}