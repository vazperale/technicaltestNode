import express from 'express';
import { connectDB } from './config/typeorm.config';
import organizationRoutes from './routes/organization.routes';

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.use('/',organizationRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;