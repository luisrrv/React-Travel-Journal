import { React, useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Footer from './Footer';
import Data from '../Data';


// const images = require.context('../../public/images', true);

const Details = () => {
    // alert('juas')
    // let navigate = useNavigate();
    const id = useParams()['*'];
    const item = Data[id -1];
    // if (!item) {
    //     Navigate('/');
    // }
    useEffect(() => {
        item.title && (document.title = `${item.title} - My Travel Journal`);
    },[item.title]);
    const [map, setMap] = useState('off');
    const [details, setDetails] = useState('off');
    const updateMap = ()=> {
        map==='off' ? setMap('on') && setDetails('off') : setMap('off');
        details==='on' && setDetails('off');
    }
    const closeMap = ()=> {
        setMap('off');
    }
    const updateDetails = ()=> {
        details==='off' ? setDetails('on') : setDetails('off');
        map==='on' && setMap('off');
    }
    const detailsOff = ()=> {
        setDetails('off');
    }
    const locationImg = {
        backgroundImage: `url(${item ? item.coverImg : ''})`,
        height: '200px',
        width: '200px',
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
      };
    return (
        <div className="details">
            {
                !item ? (
                    <Navigate to='/' />
                ) : (
                    <div>
                        <div className="nav">
                        <Link to='/' className="back-btn">{"back to the list"}</Link>
                        <p className="about" onClick={updateDetails}>{`About ${item.location}`}</p>
                        </div>
                        <div className="header">
                            <h1>{item.title}</h1>
                            <p className="dates">{`${item.dates.start} - ${item.dates.end}`}</p>
                            <div className="location-img" style={locationImg}></div>
                        </div>
                        <div className="btn" onClick={updateMap}>Map</div>
                        <div className="content">
                                <div className="pics">
                                    <img src="https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg" alt="selfie" />
                                    <img src="https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png" alt="majestic" />
                                    <img src="https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f" alt="lizzard" />
                                    <img src="https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg" alt="selfie" />
                                    <img src="https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png" alt="majestic" />
                                    <img src="https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f" alt="lizzard" />
                                    <img src="https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg" alt="selfie" />
                                    <img src="https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png" alt="majestic" />
                                    <img src="https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f" alt="lizzard" />
                                </div>
                        </div>
            
                        {(map === 'on' &&
                            <div className="popup map-container">
                            <div onClick={closeMap} className="x">X</div>
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
                            </div>)}
                        { details==='on' && <div className="popup details">{item.description}<div onClick={detailsOff} className='x'>X</div></div> }
                        <Footer />
                    </div>
                )
            }
        </div>
    )
}

export default Details;
