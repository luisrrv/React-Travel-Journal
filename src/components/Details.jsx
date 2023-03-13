import { React, useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
// import Footer from './Footer';
// import Data from '../Data';
import Map from './Map';
import { AiFillCloseCircle } from 'react-icons/ai'
import { CgCloseO } from 'react-icons/cg'
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi'
// const images = require.context('../../public/images', true);

const Details = () => {
    // console.log('Getting locations from local storage...')
    let locs = JSON.parse(localStorage.getItem('locations'));
    
    const [locations] = useState(locs);
    
    // console.log('Getting coordinates from local storage...')
    let coors = JSON.parse(localStorage.getItem('coordinates'));

    const [coordinates] = useState(coors);
    
    const windowWidth = window.innerWidth;
    const id = useParams()['*'];
    let item
    locations && locations.forEach(location=> {
        (location.my_id === parseInt(id)) && (item = location);
    });
    const [map, setMap] = useState('off');
    const [details, setDetails] = useState('off');
    const [blur, setBlur] = useState(false);
    const [fullImg, setFullImg] = useState('');

    useEffect(() => {
        item && item.title && (document.title = `${item.title} - My Travel Journal`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[/*item.title*/]);

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
    const fullScreenImg = () => {
        const img = document.querySelector('.img-full');
        const imgBg = document.querySelector('.img-full-bg');
        if (img.classList.contains('on')) {
            img.classList.remove('on');
            imgBg.classList.remove('on');
        } else {
            img.classList.add('on');
            imgBg.classList.add('on');
        }
    }
    const handleImages = (e)=> {
        let clickedImg = e.target;
        let imgs = document.querySelectorAll('.img');
        let url = clickedImg.style.backgroundImage.match(/url\(["']?([^"']*)["']?\)/)[1];
        if (clickedImg.classList.contains('on')) {
            setFullImg(url);
            fullScreenImg();
            // console.log(url);
            return;
        }
        imgs.forEach((img) => {
            img.classList.remove('on');
            img.classList.remove('off');
            img.classList.remove('full');
        });
        clickedImg.classList.add('on');
        
        imgs.forEach((img, index) => { // TODO: refactor, too long.
            if (img.classList.contains('on')) {
                if (windowWidth < 700) {
                    if (index === 0) {
                        imgs[index+1].classList.add('off');
                        imgs[index+2].classList.add('off');
                    } else if (index === imgs.length - 1) {
                        imgs[index-1].classList.add('off');
                        imgs[index-2].classList.add('off');
                    } else {
                        imgs[index-1].classList.add('off');
                        imgs[index+1].classList.add('off');
                    }
                } else if (windowWidth >= 700) {
                    // console.log(index)
                    if (index === 0) {
                        imgs[index+1].classList.add('off');
                        imgs[index+2].classList.add('off');
                        imgs[index+3].classList.add('off');
                        imgs[index+4].classList.add('off');
                        imgs[index+5].classList.add('off');
                        imgs[index+6].classList.add('off');
                    } else if (index === imgs.length - 1) {
                        imgs[index-1].classList.add('off');
                        imgs[index-2].classList.add('off');
                        imgs[index-3].classList.add('off');
                        imgs[index-4].classList.add('off');
                        imgs[index-5].classList.add('off');
                        imgs[index-6].classList.add('off');
                    } else if (index === 1) {
                        imgs[index-1].classList.add('off');
                        imgs[index+1].classList.add('off');
                        imgs[index+2].classList.add('off');
                        imgs[index+3].classList.add('off');
                        imgs[index+4].classList.add('off');
                        imgs[index+5].classList.add('off');
                    } else if (index === 2) {
                        imgs[index-2].classList.add('off');
                        imgs[index-1].classList.add('off');
                        imgs[index+1].classList.add('off');
                        imgs[index+2].classList.add('off');
                        imgs[index+3].classList.add('off');
                        imgs[index+4].classList.add('off');
                    } else if (index === 3) {
                        imgs[index-3].classList.add('off');
                        imgs[index-2].classList.add('off');
                        imgs[index-1].classList.add('off');
                        imgs[index+1].classList.add('off');
                        imgs[index+2].classList.add('off');
                        imgs[index+3].classList.add('off');
                    } else if (index === 4) {
                        imgs[index-3].classList.add('off');
                        imgs[index-2].classList.add('off');
                        imgs[index-1].classList.add('off');
                        imgs[index+1].classList.add('off');
                        imgs[index+2].classList.add('off');
                        imgs[index+3].classList.add('off');
                    } else if (index === 5) {
                        imgs[index-3].classList.add('off');
                        imgs[index-2].classList.add('off');
                        imgs[index-1].classList.add('off');
                        imgs[index+1].classList.add('off');
                        imgs[index+2].classList.add('off');
                        imgs[index+3].classList.add('off');
                    } else if (index === 6) {
                        imgs[index-3].classList.add('off');
                        imgs[index-2].classList.add('off');
                        imgs[index-1].classList.add('off');
                        imgs[index+1].classList.add('off');
                        imgs[index+2].classList.add('off');
                        imgs[index+3].classList.add('off');
                    } else if (index === 7) {
                        imgs[index-4].classList.add('off');
                        imgs[index-3].classList.add('off');
                        imgs[index-2].classList.add('off');
                        imgs[index-1].classList.add('off');
                        imgs[index+1].classList.add('off');
                        imgs[index+2].classList.add('off');
                    } else if (index === 8) {
                        imgs[index-5].classList.add('off');
                        imgs[index-4].classList.add('off');
                        imgs[index-3].classList.add('off');
                        imgs[index-2].classList.add('off');
                        imgs[index-1].classList.add('off');
                        imgs[index+1].classList.add('off');
                    }
                }
            }
        });
        // console.log('CLICKED:', clickedImg);
        // console.log('ALL:',imgs);
    }

    useEffect(() => {
        setTimeout(function(){
            let img = document.querySelectorAll('.map img');
            (img.length > 0) && img[0].classList.add('map-marker');
        },150)
    }, [map]);

    // function CustomMarker() {
    //     return (
    //       <div className="marker">
    //         {item.title}
    //       </div>
    //     );
    //   }
    return (
        locations ? (
        <div className={blur ? 'details off' : 'details'} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${item.cover_img})`}} >
            <div className='blurred-bg'></div>
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
                            {windowWidth < 700 && (
                                <div className="pics">
                                        <div className={`img on`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(${item.cover_img})`}} alt="selfie" />
                                        <div className={`img off`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg)`}} alt="selfie" />
                                        <div className={`img off`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png)`}} alt="majestic" />
                                        <div className={`img`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f)`}} alt="lizzard" />
                                        <div className={`img`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg)`}} alt="selfie" />
                                        <div className={`img`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png)`}} alt="majestic" />
                                        <div className={`img`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f)`}} alt="lizzard" />
                                        <div className={`img`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg)`}} alt="selfie" />
                                        <div className={`img`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png)`}} alt="majestic" />
                                        <div className={`img`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f)`}} alt="lizzard" />
                                </div>
                                )}
                            {windowWidth >= 700 && (
                                <div className="pics">
                                        <div className={`img on`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(${item.cover_img})`}} alt="selfie" />
                                        <div className={`img off`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg)`}} alt="selfie" />
                                        <div className={`img off`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png)`}} alt="majestic" />
                                        <div className={`img off`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f)`}} alt="lizzard" />
                                        <div className={`img off`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg)`}} alt="selfie" />
                                        <div className={`img off`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png)`}} alt="majestic" />
                                        <div className={`img off`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f)`}} alt="lizzard" />
                                        <div className={`img`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://www.boredpanda.com/blog/wp-content/uploads/2016/01/manny-cat-takes-selfies-dogs-gopro-9.jpg)`}} alt="selfie" />
                                        <div className={`img`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://i.pinimg.com/originals/f3/9b/49/f39b499a328dbba5a5f63671250b4f5c.png)`}} alt="majestic" />
                                        <div className={`img`} onClick={(e)=>{handleImages(e)}} style={{backgroundImage:`url(https://preview.redd.it/u6ckdfs0jto11.jpg?width=640&crop=smart&auto=webp&s=585c61f7d764906f2af3f4c91ab5ab53b69ad88f)`}} alt="lizzard" />
                                </div>
                                )}
                            <div className="pics-title end"><HiChevronDoubleLeft /> during the trip</div>
                        </div>
                        <div className="btn" onClick={()=>{updateMap(); blurSet();}}>Map</div>

                    </div>
                )
            }
                        {(map === 'on' &&
                            <div className="popup map-container">
                            <div onClick={()=>{closeMap(); blurSet();}} className="x"><CgCloseO size={30}/></div>
                            <div className="map">
                                <Map coordinates={coordinates} title={item.title} cover_img={item.cover_img}/>
                            </div>
                            </div>)}
                        { details==='on' && <div className="popup details">{item.description}<div onClick={()=>{detailsOff(); blurSet();}} className='x'><AiFillCloseCircle/></div></div> }
                        {/* <Footer /> */}
            <div className="img-full-bg"></div>
            <div className="img-full" onClick={fullScreenImg} style={{backgroundImage:`url(${fullImg})`}}></div>
            <div className={blur ? 'img-full-bg on' : 'img-full-bg'}></div>
        </div>
        ) : ( <Navigate to='/' /> )
    )
}

export default Details;
