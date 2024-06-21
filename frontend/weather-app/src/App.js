import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Aplicativo de Clima</h1>
      <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Digite o nome da cidade"
      />
      <button onClick={fetchWeather}>Buscar Clima</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperatura: {weather.main.temp}ºC</p>
          </div>
      )}
    </div>
  );
}




export default App;