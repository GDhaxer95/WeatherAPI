import express, { Response, Request, NextFunction} from "express";
import { WeatherController} from "./controllers/weatherController";
import { errorHandler } from "./middlewares/errorHandler";


const app = express();
const API_KEY = "9e01699223d64febbda121232241202";

const weatherController = new WeatherController(API_KEY);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Get Weather Information Route
app.get('/weather/:city', async(req: Request, res: Response, next: NextFunction) => {
    await weatherController.getWeatherByCity(req,res,next);
})

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });