import React from 'react';

const Weather = (props) => {
    return (
        <div className="weatherbody">
            <div className="weatherlist">
            {props.country && props.city && <p>Location:{props.city}, {props.country}</p>}
            </div>
            <div className="weatherlist">
            {props.temperature && <p>Temperature: {props.temperature.toFixed(2)}</p>}
            </div>
            <div className="weatherlist">
            {props.humidity && <p>Humidity: {props.humidity}</p>}
            </div>
            <div className="weatherlist">
            {props.description && <p>Conditions:  {props.description}</p>}
            </div>
            <div className="weatherlist">
            {props.error && <p>{props.error}</p>}
            </div>
        </div>
    );
}

export default Weather;