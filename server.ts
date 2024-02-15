import express, { Response, Request, NextFunction } from 'express';
import axios from 'axios';
import { WeatherController } from './Controllers/weatherController';
import process from 'process';
import { errorHandler } from './Middlewares/errorHandlers';
import { API_KEY, PORT } from './Constants/config';
import { logRequest, logResponse } from './Middlewares/logHandlers';

const app = express();

app.use(express.static('public')); // Move this line up

const weatherController = new WeatherController(API_KEY);

// Middleware for incoming requests
app.use(logRequest);

// Middleware for outgoing responses
app.use(logResponse);

app.get('/weather/:city', async (req: Request, res: Response, next: NextFunction) => {
    await weatherController.getWeatherByCity(req, res, next);
})

// Route to serve index.html
app.get('/', (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'Public' });
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
