import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { UseForecastData, UseWeatherData } from "hooks/OpenWeather";
import { Box, Grid } from "@mui/material";
import { LineChart } from "./LineChart";
import { UsePredictionData } from "hooks/PredictWeather";
import { toCelcius } from "utils";
import { Icon } from "./Icon";

export const WeatherCard = () => {
  const { isLoading, data } = UseForecastData();
  const { data: current } = UseWeatherData();
  const { data: pred } = UsePredictionData();
  const [weather, setWeather] = useState<number[]>([]);
  const displayDate = new Date();
  displayDate.setDate(displayDate.getDate() + 1);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const arr = Array(24).fill(undefined);
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
        .map((i) => {
          const d = new Date(i.dt_txt);
          return {
            temp: toCelcius(i.main.temp, false),
            hour: d.getHours(),
          };
        });
      temp.forEach((i) => {
        arr[i.hour] = i.temp;
      });
      setWeather(arr);
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
    <Box width="100%">
      <Grid container gap={2}>
        <Grid item xs={12} md>
          <Card sx={{ height: "100%" }}>
            {current && (
              <CardContent>
                <Box
                  display="flex"
                  gap={4}
                  flexDirection="column"
                  alignItems="start"
                >
                  <Box display="flex" gap={2}>
                    <Typography variant="h3">
                      <Icon
                        id={current.weather[0].id}
                        night={current.weather[0].icon.endsWith("n")}
                      />
                    </Typography>
                    <Typography variant="h3">
                      {toCelcius(current.main.temp)}°C
                    </Typography>
                  </Box>
                  <Typography
                    variant="h5"
                    textTransform="capitalize"
                    justifySelf="center"
                    bgcolor="text.primary"
                    color="background.default"
                    px={4}
                    borderRadius={1}
                  >
                    {current.weather[0].main}
                  </Typography>
                </Box>
                <br />
                <Box
                  display="grid"
                  sx={{
                    gridTemplateColumns: {
                      xs: "repeat(2, 1fr)",
                      sm: "repeat(2, 1fr)",
                      md: "repeat(2, 1fr)",
                      lg: "repeat(2, 1fr)",
                    },
                  }}
                >
                  <Typography variant="h6" textTransform="capitalize">
                    Description
                  </Typography>
                  <Typography variant="h6" textTransform="capitalize">
                    {current.weather[0].description}
                  </Typography>
                </Box>
                <br />
                <Box
                  display="grid"
                  sx={{
                    gridTemplateColumns: {
                      xs: "repeat(2, 1fr)",
                      sm: "repeat(2, 1fr)",
                      md: "repeat(2, 1fr)",
                      lg: "repeat(2, 1fr)",
                    },
                  }}
                >
                  <Typography variant="h6">Feels Like</Typography>{" "}
                  <Typography variant="h6">
                    {toCelcius(current.main.feels_like)}°C
                  </Typography>
                  <Typography variant="h6">Min</Typography>{" "}
                  <Typography variant="h6">
                    {toCelcius(current.main.temp_min)}°C
                  </Typography>
                  <Typography variant="h6">Max</Typography>{" "}
                  <Typography variant="h6">
                    {toCelcius(current.main.temp_max)}°C
                  </Typography>
                </Box>
                <br />
                <Box
                  display="grid"
                  sx={{
                    gridTemplateColumns: {
                      xs: "repeat(2, 1fr)",
                      sm: "repeat(2, 1fr)",
                      md: "repeat(2, 1fr)",
                      lg: "repeat(2, 1fr)",
                    },
                  }}
                >
                  <Typography variant="h6">Humidity</Typography>{" "}
                  <Typography variant="h6">{current.main.humidity}</Typography>
                  <Typography variant="h6">Pressure</Typography>{" "}
                  <Typography variant="h6">
                    {current.main.pressure} (bar)
                  </Typography>
                  <Typography variant="h6">Sea Level</Typography>{" "}
                </Box>
                <br />
                <br />
                <br />

                <Box display="flex" gap={2}>
                  <Typography variant="subtitle1">
                    {displayDate.toLocaleDateString("en-us", {
                      month: "short",
                      day: "numeric",
                      year: "2-digit",
                    })}
                  </Typography>
                  <Typography variant="subtitle1"></Typography>
                </Box>
                <Typography variant="body1"></Typography>
              </CardContent>
            )}
          </Card>
        </Grid>
        <Grid item xs={12} md={7}>
          <Card sx={{ height: "100%" }}>
            {data && (
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1em",
                  height: "100%",
                }}
              >
                <Box>
                  <Typography variant="h4">Predictions</Typography>
                  <Typography variant="subtitle1">
                    {displayDate.toLocaleDateString("en-us", {
                      month: "short",
                      day: "numeric",
                      year: "2-digit",
                    })}
                  </Typography>
                  <Typography variant="subtitle1">
                    Temprature {"(C)"}
                  </Typography>
                </Box>
                <Box flexGrow={1}>
                  <LineChart
                    openWeather={weather}
                    prediction={
                      pred ? pred.main_temp.map((i) => toCelcius(i, false)) : []
                    }
                  />
                </Box>
              </CardContent>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
