import React, { useState } from 'react';
import './App.css';
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import CityList from './CityList'

function App() {
  const [selectedCity, setSelectedCity] = useState({ coordinaten: [50.879, 4.6997], name: "Leuven" })
  const clickHandler = (city) => {
    setSelectedCity({ coordinaten: city.coordinaten, name:city.name })
  }
  return (
    <div className="App">
      <header className="App-header">
        <div class="flex">
          <CityList click={clickHandler} selectedCity = {selectedCity.name}/>
          <Map center={selectedCity.coordinaten} zoom={12} width={600} height={400}>
            <Marker anchor={selectedCity.coordinaten} />
          </Map>
        </div>
      </header>
    </div>
  );
}

export default App;
