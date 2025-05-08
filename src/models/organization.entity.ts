import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
//import { ChargePoint } from './chargepoint.entity';   //dejo ya lista la estructura para cuando se haga los endpoints de chargerPoints

@Entity()
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty({ message: 'Name is required' })  
  @IsString()  
  name: string;

  @Column({ type: 'text', nullable: true })
  @IsOptional()  
  @IsString()  
  legalEntity: string;

  /*@OneToMany(() => ChargePoint, chargePoint => chargePoint.organization)
  chargePoints: ChargePoint[];*/
}
