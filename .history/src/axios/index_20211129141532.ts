import axios from "axios";
import { config } from "process";

const api = axios.create( {
    baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(config => {
    
    return config;
});