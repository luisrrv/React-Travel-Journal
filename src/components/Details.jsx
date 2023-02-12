import { React, useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
// import Footer from './Footer';
import Data from '../Data';
import Map from './Map';
import { AiFillCloseCircle } from 'react-icons/ai'
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi'


// const images = require.context('../../public/images', true);

const Details = () => {
    const id = useParams()['*'];
    const item = Data[id -1];
    const [map, setMap] = useState('off');
    const [details, setDetails] = useState('off');
    const [blur, setBlur] = useState(false);

    useEffect(() => {
        item.title && (document.title = `${item.title} - My Travel Journal`);
    },[item.title]);

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
    const detailsOff = (e)=> {
        setDetails('off');
    }
    const blurSet = () => {
        (map==='on' || details==='on') ? setBlur(false) : setBlur(true);
    }
    const location = item.location.replace(/\s/g , "+");
    const [coordinates, setCoordinates] = useState(null);
    useEffect(() => {
        const getCoordinates = async () => {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_MAPS_KEY}`
                );
                const data = await response.json();
                const { lat, lng } = data.results[0].geometry.location;
                setCoordinates({ lat, lng });
            };
            
            getCoordinates();
        }, [location]);
    return (
        <div className={blur ? 'details off' : 'details'} >
            {
                !item ? (
                    <Navigate to='/' />
                ) : (
                    <div className='container'>
                        <div className="nav" >
                        <Link to='/' className="back-btn">{"back to the list"}</Link>
                        <p className="about" onClick={()=> {updateDetails(); blurSet();}} >{`About ${item.location}`}</p>
                        </div>
                        <div className="header" >
                            <h1>{item.title}</h1>
                            <p className="dates">{`${item.dates.start} - ${item.dates.end}`}</p>
                            {/* <div className="location-img" style={locationImg}></div> */}
                        </div>
                        <div className="content" >
                            <div className="pics-title">pics taken <HiChevronDoubleRight /></div>
                            <div className="pics">
                                <img src={item.coverImg} alt="selfie" />
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
                            <div className="pics-title end"><HiChevronDoubleLeft /> during the trip</div>
                        </div>
                        <div className="btn" onClick={()=>{updateMap(); blurSet();}}>Map</div>

                        {(map === 'on' &&
                            <div className="popup map-container">
                            <div onClick={()=>{closeMap(); blurSet();}} className="x"><AiFillCloseCircle/></div>
                            <div className="map">
                                <Map coordinates={coordinates} />
                            </div>
                            </div>)}
                        { details==='on' && <div className="popup details">{item.description}<div onClick={()=>{detailsOff(); blurSet();}} className='x'><AiFillCloseCircle/></div></div> }
                        {/* <Footer /> */}
                    </div>
                )
            }
            <div className={blur ? 'blur on' : 'blur'}></div>
        </div>
    )
}

export default Details;
