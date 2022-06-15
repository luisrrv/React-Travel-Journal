import React from 'react'
import { MdLocationPin } from 'react-icons/md';


// const images = require.context('../../public/images', true);

const Card = (props) => {
  const divImage = {
    backgroundImage : `url(${props.item.coverImg})`
  };
  const style = { color: "#F55A5A", fontSize: "20px" }
  return (
    <div className="card">
        {/* {badgeText && <div className="card--badge">{badgeText}</div>} */}
        <div style={divImage} className="card--image" ></div>
        <div className="card--stats">
          <p className='card--location'><MdLocationPin style={style} />{props.item.location} <span><a className='gray' href={`https://www.google.com/maps/place/${props.item.location}`} target="_blank" rel="noreferrer">&nbsp;&nbsp;&nbsp;View on Google Maps</a></span></p>
          <h2 className='card--title'>{props.item.title}</h2>
          <h6 className='card--date'>{props.item.dates.start} - {props.item.dates.end}</h6>
          <p className='card--description'>{props.item.description}</p>
        </div>
    </div>
  )
}

export default Card;

  // let badgeText
  // if (props.item.openSpots === 0) {
  //     badgeText = "SOLD OUT"
  // } else if (props.item.location === "Online") {
  //     badgeText = "ONLINE"
  // }
