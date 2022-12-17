import "weather-react-icons/lib/css/weather-icons.css";
import { WeatherIcon } from "weather-react-icons";

export const Icon = ({ id, night }: { id: number; night: boolean }) => {
  return <WeatherIcon iconId={id} name="owm" night={night} />;
};
