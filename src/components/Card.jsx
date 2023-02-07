import React from 'react'
import { SiGooglemaps } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const divImage = {
    backgroundImage : `url(${props.item.coverImg})`
  };
  const style = { color: "#F55A5A", fontSize: "20px" }
  return (
    <Link to={`/details/${props.item.id}`} className="card">
        {/* {badgeText && <div className="card--badge">{badgeText}</div>} */}
        <div style={divImage} className="card--image" />
        <div className="card--stats">
          {/* <p className='card--location'><SiGooglemaps style={style} /><span><a className='gray' href={`https://www.google.com/maps/place/${props.item.location}`} target="_blank" rel="noreferrer">View on Google Maps</a></span></p> */}
          <div className='card--title' style={{color:'#000000'}}><SiGooglemaps style={style} />&nbsp;{props.item.title}</div>
          <h6 className='card--date'>{props.item.dates.start} - {props.item.dates.end}</h6>
          {/* <p className='card--description'>{props.item.description}</p> */}
        </div>
    </Link>
  )
}

export default Card;
