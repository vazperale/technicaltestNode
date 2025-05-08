import express from 'express';
import { connectDB } from './config/typeorm.config';
import organizationRoutes from './routes/organization.routes';
import chargePointRoutes from './routes/chargepoint.routes';
import cors from 'cors';
const swaggerDocument = require("./swagger.json");
import swaggerUi from 'swagger-ui-express';


const app = express();
const port = 3000;

app.use(cors({
  origin: '*',
}));

app.use(express.json());


connectDB();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/',organizationRoutes);
app.use('/', chargePointRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;