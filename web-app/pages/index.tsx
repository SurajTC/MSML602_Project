import Head from "next/head";
import { WeatherCard } from "components/WeatherCard";
import Time from "components/Time";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box my={4}>
      <Head>
        <title>Weather App</title>
        <meta
          name="description"
          content="Weather Forecasting Using Machine Learning"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="main">
        <Time />
        <WeatherCard />
      </Box>
      <Box component="footer">
        <p>This is footer</p>
      </Box>
    </Box>
  );
}
