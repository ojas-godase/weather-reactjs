import React from 'react'

export default function Grid(props) {
  return (
    <div className='grid'>
        <img className='grid-img' src={props.img} alt="" />
        <div className="info">
            <div className="grid-text">
                <div className="gr-text">
                    {props.text}
                </div>
                <div className="gr-info">
                    {props.info}
                </div>
                
            </div>
        </div>
    </div>
  )
}
