import React from 'react'
import { SiGooglemaps } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const idName = props.item.location.replace(/\s/g , "_").toLowerCase();
  const divImage = {
    backgroundImage : `url(${props.item.cover_img})`
  };
  const style = { color: "#F55A5A", fontSize: "20px" }
  return (
    <Link to={`/details/${props.item.my_id}`} className="card" id={idName}>
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
