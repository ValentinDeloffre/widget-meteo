import { useEffect, useState } from 'react';
import './WidgetMeteo.scss';
import axios from 'axios';


interface WidgetMeteoProps {
  city: string;
  zipcode: string;
}


function WidgetMeteo({ city, zipcode }: WidgetMeteoProps) {

  const [temperature, setTemperature] = useState(0);
  const [icon, setIcon] = useState('04d');

  const fetchTemperature = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},fr&appid=${API_KEY}&units=metric`);
    // console.log(result);
    setTemperature(Math.round(result.data.main.temp));
    setIcon(result.data.weather[0].icon)
  };

  useEffect(
    () => {
      fetchTemperature();
    },
    [zipcode]
  );

  return (
    <div className="meteo">
    <div>
      <div className="meteo-city">{city}</div>
      <div className="meteo-zipcode">{zipcode}</div>
      <div className="meteo-temperature">{temperature}°C</div>
    </div>
    <div>
      <img src={`https://openweathermap.org/img/wn/${icon}.png`} />
    </div>
  </div>
  );
}

export default WidgetMeteo;