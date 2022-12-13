import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { UseForecastData } from "hooks/OpenWeather";
import { Box } from "@mui/material";
import { LineChart } from "./LineChart";

export const WeatherCard = () => {
  const { isLoading, data } = UseForecastData();
  const [weather, setWeather] = useState<number[]>([]);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    if (data) {
      const temp = data.list
        .filter((l) => {
          const date = new Date(l.dt_txt);

          return (
            date.getDate() === tomorrow.getDate() &&
            date.getMonth() === tomorrow.getMonth() &&
            date.getFullYear() === tomorrow.getFullYear()
          );
        })
        .map((i) => i.main.temp);
      setWeather(temp);
    }

    return () => {};
  }, [data]);

  if (isLoading) {
    return (
      <Card>
        <CardContent>
          <Typography variant="h6">Loading...</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      {data && (
        <CardContent>
          <Typography variant="h4">Weather Prediction</Typography>
          <Box display="flex" gap={2}>
            <Typography variant="subtitle1">
              {tomorrow.toLocaleDateString("en-us", {
                month: "short",
                day: "numeric",
                year: "2-digit",
              })}
            </Typography>
            <Typography variant="subtitle1">Temprature {"(K)"}</Typography>
          </Box>
          <LineChart openWeather={weather} />
          <Typography variant="body1"></Typography>
        </CardContent>
      )}
    </Card>
  );
};
