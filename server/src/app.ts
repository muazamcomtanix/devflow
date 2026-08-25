import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import healthRouter from './routes/health.js';

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// --- API v1 Routes ---
app.use('/api/v1/health', healthRouter);

export default app;