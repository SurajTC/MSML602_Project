export const params = {
  lat: 40.7143,
  lon: -74.006,
  appid: process.env.OpenWeatherAPI,
};

export type Description = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type CurrentWeather = {
  weather: Description[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
  };
};

export type Weather = {
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
  weather: Description[];
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

export type City = {
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

export type Forecast = {
  cod: string;
  city: City;
  message: string;
  cnt: number;
  list: Weather[];
};
