import express from 'express';
import { connectDB } from './config/typeorm.config';
import organizationRoutes from './routes/organization.routes';
import chargePointRoutes from './routes/chargepoint.routes';

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.use('/',organizationRoutes);
app.use('/', chargePointRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;