import { NextFunction, Request, Response } from "express";
import axios, {AxiosResponse} from "axios";
import { WeatherError } from "../middlewares/errorHandler";

export class WeatherController {
  private API_KEY: string;

  constructor(key: string){
    this.API_KEY = key;
  }

  public async getWeatherByCity(req: Request, res: Response, next: NextFunction):Promise<void>{

    const city: string = req.params.city;
    try {
        const response : AxiosResponse = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${city}&lang=fr`
        );
        const data = response.data;
        res.json(data);
    }
    catch (error) {
        console.log('error : ', error);
        next(new WeatherError("Error while fetching weather data"));
    }

  }
}



