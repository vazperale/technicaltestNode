import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';
import { Organization } from './organization.entity'; 

@Entity()
export class ChargePoint {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  @IsNotEmpty({ message: 'identity is required' })  
  @IsString()  
  identity:string;

  @ManyToOne(() => Organization, organization => organization.chargePoints)
  @JoinColumn({ name: 'organizationId' })
  cpo:Organization;
}