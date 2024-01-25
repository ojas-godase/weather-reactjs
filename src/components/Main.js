import React from 'react'

export default function Main(props) {
  return (
    <div>
        <div className="weather-img">
            <img className='weather' src={props.icon} alt="" />
        </div>
        <div className="city">{props.location}</div>
        <div className="temp">{props.temp}</div>
        <div className="weather-text">{props.condition}</div>
        {/* <div className="hi-lo">
            <div className="hi">H:20°C</div>
            <div className="hi">L:20°C</div>
        </div>
         */}
    </div>
  )
}
