'use client'
import { useEffect, useState } from 'react';
import { get } from '../app/api/request';

const API_KEY = 'eb518dec972e247e1a9f250c4d1df0ba';
const CITY = 'Paris';
const PROXY = 'https://corsproxy.io/?';
const URL = `${PROXY}https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${API_KEY}&units=metric`;

interface WeatherAPIResponse {
  weather: { description: string }[];
  main: { temp: number };
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<{ description: string; temperature: number } | null>(null);

  async function getMeteoFromAPI() {
    try {
      const response = await get<WeatherAPIResponse>(URL);
      const data = response.data;
      console.log(data)

      setWeather({
        description: data.weather[0].description,
        temperature: data.main.temp,
      });
    } catch (error) {
      console.error("Weather API - Rettrieving ERROR: ", error);
    }
  }

  useEffect(() => {
    getMeteoFromAPI();
  }, []);

  return (
    <div className="h-[30vh] w-[30vw] flex flex-col justify-center items-center rounded-4xl text-white bg-gradient-weather p-4">
      <h2 className="text-lg font-bold mb-2">{CITY}</h2>
      {weather ? (
        <>
          <p>Météo: {weather.description}</p>
          <p>Température: {weather.temperature} °C</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  );
}
