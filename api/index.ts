import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('./static'))

app.get('/api/hello', async (request: Request, response: Response) => {
  response.json({"data": "Hello, world"})
})

const PORT = process.env.PORT || 3001
export const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})