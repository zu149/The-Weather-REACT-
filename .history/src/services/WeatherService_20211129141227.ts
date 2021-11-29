import axios, { AxiosResponse } from "axios";
import { Weather } from "../store/types/types";

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
        return axios.get( '/weather?q=${city}&appid={40eb95806485a77f04d4c4fb87ddc2a7}');
    }
}