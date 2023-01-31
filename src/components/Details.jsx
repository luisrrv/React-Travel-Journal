import React from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


// const images = require.context('../../public/images', true);

const Details = (props) => {
    const item = useLocation().state;
    console.log(item);
    const [state, setState] = useState('pics');
    const [details, setDetails] = useState('off');
    const updateState = ()=> {
        state==='pics' ? setState('map') :setState('pics');
        console.log(state);
    }
    const updateDetails = ()=> {
        details==='off' ? setDetails('on') :setDetails('off');
        console.log(details);
    }
    const locationImg = {
        backgroundImage: `url(${item.coverImg})`,
        height: '400px',
        width: '400px',
        backgroundSize: 'cover',
      };
    return (
        <div className="details">
            <Link to='/' >{"<Travels list"}</Link>
            <div className="header">
                <h1>{item.title}</h1>
                <p className="about" onClick={updateDetails}>{`About ${item.location}`}</p>
                <p className="dates">{`${item.dates.start} - ${item.dates.end}`}</p>
                <div className="location-img" style={locationImg}></div>
            </div>
            { state === 'map' ? <div className="btn" onClick={updateState}>View pics</div> : <div className="btn" onClick={updateState}>View map</div> }
            <div className="content">
                { 
                (
                    state === 'map' ? 
                    <div className="map">
                        Map Map Map Map Map Map Map Map Map Map Map Map Map <br />
                        Map Map Map Map Map Map Map Map Map Map Map Map Map <br />
                        Map Map Map Map Map Map Map Map Map Map Map Map Map <br />
                        Map Map Map Map Map Map Map Map Map Map Map Map Map <br />
                        Map Map Map Map Map Map Map Map Map Map Map Map Map <br />
                        Map Map Map Map Map Map Map Map Map Map Map Map Map <br />
                        Map Map Map Map Map Map Map Map Map Map Map Map Map <br />
                        Map Map Map Map Map Map Map Map Map Map Map Map Map <br />
                        Map Map Map Map Map Map Map Map Map Map Map Map Map <br />
                        Map Map Map Map Map Map Map Map Map Map Map Map Map <br />
                    </div> 
                    : 
                    <div className="pics">
                        Didn't take any pics :(
                    </div> 
                    )
                }
            </div>
            
            { details==='on' && <div className="popup details">{item.description}</div> }
            
        </div>
    )
}

export default Details;
