import { useQuery } from "react-query";
import axios from "axios";
import { CurrentWeather, Forecast, params } from "./type";

const fetchWeather = async () => {
  const url = "https://api.openweathermap.org/data/2.5/weather";

  const response = await axios.get<CurrentWeather>(url, { params });
  return response.data;
};

export const UseWeatherData = () => {
  return useQuery("weather", fetchWeather);
};

const fetchForecast = async () => {
  const url = "https://pro.openweathermap.org/data/2.5/forecast/hourly";
  const params = {
    lat: 40.7143,
    lon: -74.006,
    appid: process.env.OpenWeatherAPI,
  };
  const response = await axios.get<Forecast>(url, { params });
  return response.data;
};

export const UseForecastData = () => {
  return useQuery("forecast", fetchForecast);
};
