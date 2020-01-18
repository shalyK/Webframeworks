import React from 'react'
import cities from './cities.json'

function CityList(props) {
    return (
        <ul>
            {cities.map((city) => {
                return <li className={props.selectedCity === city.Name ? "selected" : null} onClick={() => props.click({ coordinaten: [city.Lat, city.Lon], name: city.Name })}>
                    {city.Name}</li>
            })}
        </ul>
    )
}

export default CityList