import express from 'express';
import { connectDB } from './config/typeorm.config';

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.get('/hello', (req, res) => {
  res.send('Hola Mundo!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;