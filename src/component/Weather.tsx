import { Toast } from "antd-mobile";
import { useEffect, useState } from "react";
import { weatherSerivces } from "services/weather";


export function Weather() {
  const [weather, setWeather] = useState('')
  const [city, setCity] = useState('')


  async function fetchWeatherData() {
    try {
      const forecastData = await weatherSerivces()
      const todayCast = forecastData[0].casts[0]
      setWeather(todayCast.dayweather)
      setCity(forecastData[0].city)
    } catch (error) {
      Toast.show(error as string)
    }
  }

  useEffect(() => {
    fetchWeatherData()
  }, [])

  return (
    <div>{city + weather}</div>
  )
}
