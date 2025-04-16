'use client';

import { useEffect, useState } from 'react';

const CITY = 'Paris';

interface WeatherAPIResponse {
  weather: { description: string }[];
  main: { temp: number };
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<{ description: string; temperature: number } | null>(null);

  async function getMeteoFromAPI() {
    try {
      const res = await fetch(`/api/weather?q=${CITY}`);
      if (!res.ok) throw new Error("Erreur lors de l'appel API");
      const data: WeatherAPIResponse = await res.json();

      setWeather({
        description: data.weather[0].description,
        temperature: data.main.temp,
      });
    } catch (error) {
      console.error("Weather API - Retrieving ERROR: ", error);
    }
  }

  useEffect(() => {
    getMeteoFromAPI();
  }, []);

  return (
    <div className="h-[30vh] w-[30vw] flex flex-col justify-center items-center rounded-4xl text-white bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 p-4">
      <div className="absolute top-7 left-10 grid grid-cols-2 items-center">
        <img
          src="/os-design/weather-widget-icon.png"
          alt="Weather icon"
          className="justify-center"
        />

        <div className='ml-13'>
          <h1 className="font-bold text-4xl mb-2">{CITY}</h1>
          {weather ? (
            <>
              <p className="text-7xl font-extrabold mb-1">
                {weather.temperature.toString().slice(0, 2)}°
              </p>
              <p className="text-xl text-gray-200 capitalize">{weather.description}</p>
            </>
          ) : (
            <div className="mt-2">
              <img
                src="/os-design/loading-2.gif"
                alt="Loading icon rolling"
                className="w-10 h-10 animate-spin"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
