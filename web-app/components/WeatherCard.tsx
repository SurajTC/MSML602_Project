import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { UseForecastData } from "hooks/OpenWeather";
import { Box } from "@mui/material";

export const WeatherCard = () => {
  const { isLoading, data } = UseForecastData();

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
          <Typography variant="h5">{data.cod}</Typography>
          <Box display="flex" gap={2}>
            <Typography variant="h6">DateTime</Typography>
            <Typography variant="h6">Temprature {"(K)"}</Typography>
          </Box>
          {data.list.map((d) => (
            <Box key={d.dt} display="flex" gap={2}>
              <Typography variant="h6">{d.dt_txt}</Typography>
              <Typography variant="h6">{d.main.temp}</Typography>
            </Box>
          ))}
          <Typography variant="body1"></Typography>
        </CardContent>
      )}
    </Card>
  );
};
