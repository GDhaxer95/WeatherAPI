import axios, { AxiosResponse } from 'axios';
import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../Errors/ApiError';
import { MinimalWeatherData } from '../Interfaces/MinimalWeatherData';

export class WeatherController {

    private API_KEY: string;

    constructor(apiKey:string)
    {
        this.API_KEY = apiKey
    }

    public async getWeatherByCity(req: Request, res: Response, next: NextFunction):Promise<void> {
        const city: string = req.params.city; // Retrieve city from request params
        const url = `http://api.weatherapi.com/v1/current.json?key=${this.API_KEY}&q=${city}&lang=fr`;
        try {
            const response : AxiosResponse = await axios.get(
                url
            );
            const minimalData : MinimalWeatherData = {
                city: response.data.location.name,
                country: response.data.location.country,
                temperature: response.data.current.temp_c,
                condition: response.data.current.condition.text,
                icon: response.data.current.condition.icon
            }
            res.json(minimalData);
        } catch (error) {
            next(new ApiError("Erreur lors de la récupération de la météo"));
        }

    }

}