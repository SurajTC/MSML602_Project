import { useQuery } from "react-query";
import axios from "axios";

interface Props {
  api_key?: string;
}

type description = {
  id: string;
  main: string;
  description: string;
  icon: string;
};

type Weather = {
  dt: number | string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: description[];
  clouds: any;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: string;
  pop: string;
  dt_txt: string;
};

type City = {
  coord: {
    lon: number;
    lat: number;
  };
  country: string;
  id: string;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: string;
};

type Forecast = {
  cod: string;
  city: City;
  message: string;
  cnt: number;
  list: Weather[];
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
  return useQuery("weather", fetchForecast);
};

export async function getStaticProps() {
  return {
    props: {
      api_key: process.env.OPENWEATHER_API_KEY,
    },
  };
}
