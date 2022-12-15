import "weather-react-icons/lib/css/weather-icons.css";
import { WeatherIcon } from "weather-react-icons";

export const Icon = ({ id }: { id: string }) => {
  return <WeatherIcon iconId={200} name="owm" night />;
};
