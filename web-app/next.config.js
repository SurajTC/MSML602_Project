/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    OpenWeatherAPI: process.env.OPENWEATHER_API_KEY,
  },
};

module.exports = nextConfig;
