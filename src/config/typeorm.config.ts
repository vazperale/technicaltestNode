import { DataSource } from 'typeorm';
import { Organization } from '../models/organization.entity';
import { ChargePoint } from '../models/chargepoint.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Organization,ChargePoint],
  synchronize: true, 
  logging: false,
});

const connectDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export { connectDB, AppDataSource };
