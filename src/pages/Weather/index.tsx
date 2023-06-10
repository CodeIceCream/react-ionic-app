import { Toast } from 'antd-mobile';
import { IonTemplate } from 'component/IonTemplate';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { weatherSerivce } from 'services/weather';

export const Weather = () => {
  const { t } = useTranslation();
  const [weather, setWeather] = useState('');
  const [city, setCity] = useState('');

  async function fetchWeatherData() {
    try {
      const forecastData = await weatherSerivce();
      const todayCast = forecastData[0].casts[0];
      setWeather(todayCast.dayweather);
      setCity(forecastData[0].city);
    } catch (error) {
      Toast.show(error as string);
    }
  }

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <IonTemplate title={t('weather.title')}>
      <div>{city + weather}</div>;
    </IonTemplate>
  );
};
