import React, { useState, useEffect } from 'react'
import './App.scss';
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer';
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { app, db } from './firebase-config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import LocationForm from './components/LocationForm/LocationForm';

function App() {
  
  const [locations, setLocations] = useState([]);
  const [get, setGet] = useState(false);
  const [loginForm, setLoginForm] = useState('off');
  const [locationForm, setLocationForm] = useState('off');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [blur, setBlur] = useState(false);
  const usersCollectionRef = collection(db, "Places");
  
  // get data needed on load
  useEffect(() => {
      
    let locs;
    let coors = [];
      
    const handleGet = () => {
        if(!localStorage.getItem('locations') || localStorage.getItem('locations')==='null' || localStorage.getItem('locations')==='' || localStorage.getItem('locations')==='[]' || localStorage.getItem('locations')==='{}') {
          setGet(true);
        } else {
          setGet(false);
        }
    }

    const getLocations = async () => {
        console.log('Getting locations...',get);
        const data = await getDocs(usersCollectionRef);
        locs = (data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        setLocations(locs);
        localStorage.setItem('locations', JSON.stringify(locs));
        await getCoordinates();
    }

    const getFromAPI = async (location) => {
        console.log('Getting coordinates...');
        let res = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${location.title}&key=${process.env.REACT_APP_MAPS_KEY}`
        );
        let data = await res.json();
        let coor = [location.title, [data.results[0].geometry.location.lat, data.results[0].geometry.location.lng]]
        coors.push(coor);
        localStorage.setItem('coordinates', JSON.stringify(coors));
    }
    const getCoordinates = () => {
        if (!localStorage.getItem('coordinates') || localStorage.getItem('coordinates')!=='' || localStorage.getItem('coordinates')!=='[]' || localStorage.getItem('coordinates')!=='null' || localStorage.getItem('coordinates')!=='{}') {
            locs.forEach(location => {
                getFromAPI(location);
            })
        } 
    }

    handleGet();

    if (get) {
        getLocations();
    } else if (!get) {
        setLocations(JSON.parse(localStorage.getItem('locations')));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[get]);

  // auth
  const navigate = useNavigate();
  let authToken = sessionStorage.getItem('Auth Token')
  useEffect(() => {
    document.title = 'My Travel Journal';
    if (authToken) {
      setLoginForm('off');
    }
  }, [authToken]);

  const clearInfo = () => {
    setEmail('');
    setPassword('');
  }
  const handleAction = () => {
    const authentication = getAuth(app);
    if((email==='') && (password==='')) {
      toast.error('Please check your email/password');
      return;
    }

    signInWithEmailAndPassword(authentication, email, password)
    .then((response) => {
        toast.success('Logged in');
        navigate('/');
        sessionStorage.setItem('Auth Token', response.user.refreshToken)
      }).catch((error) => {
        console.log(error);
        if(error.code === 'auth/wrong-password'){
          toast.error('Please check the Password');
        } else if(error.code === 'auth/user-not-found'){
          toast.error('Please check the Email');
        } else if(error.code === 'auth/invalid-email'){
          toast.error('Please enter a valid Email');
        } else {
          toast.error('Please check your email/password');
        }
      });
  }
  const handleLoginForm = ()=> {
    loginForm==='off' ? setLoginForm('on') : setLoginForm('off');
  }
  const handleLocationForm = ()=> {
    locationForm==='off' ? setLocationForm('on') : setLocationForm('off');
  }
  const loginFormOn = ()=> {
    setLoginForm('on');
  }
  const locationFormOn = ()=> {
    setLocationForm('on');
  }
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    clearInfo();
    toast("Logged out");
    navigate('/');
  }
  const blurSet = () => {
    ((loginForm==='on') || locationForm==='on') ? setBlur(false) : setBlur(true);
  }
  const openMenu = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menuItems = document.querySelector('.menu-items');
    menuBtn && menuBtn.classList.toggle('on');
    menuItems && menuItems.classList.toggle('on');
  }
  const openList = () => {
    const listBtn = document.querySelector('.menu-locations');
    listBtn.classList.toggle('opened');
  }
  const pageNavigate = (idName) => {
    document.getElementById(idName).scrollIntoView();
  }
  const [accordionOpen, setAccordionOpen] = useState(false);
  const handleAccordionOpen = () => {
    accordionOpen ? setAccordionOpen(false) : setAccordionOpen(true);
  }
  const newId = localStorage.getItem('locations') ? JSON.parse(localStorage.getItem('locations')).length + 1 : 1;

  return (
    <div className={blur ? 'App off' : 'App'} >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Nav />
      <Hero />
      <section id='cards-list' className='cards-list'>
      {
        locations && locations.sort((a,b)=> (a.my_id < b.my_id ? 1 : -1)).map(item => {
          return (
            <Card
                key={item.my_id}
                item={item}
                // {...item}
              />
          )
        })
      }
      </section>
      <div className='menu-btn on'>
        <FiMenu onClick={openMenu} />
      </div>
        { authToken ? (
            <div className='menu-items'>
                <div className='menu-btn-close'>
                    <AiFillCloseCircle onClick={openMenu} />
                </div>
                <p className='btn login-btn' onClick={()=>{handleLogout(); openMenu();}} >Logout</p>
                <p className='btn add-location' onClick={handleLocationForm}>Add location</p>
                <p className='btn locations-list-btn' onClick={() => {openList(); handleAccordionOpen();}} >Locations {accordionOpen ? <BsChevronUp /> : <BsChevronDown />}</p>
                <div className='menu-locations'>
                {
                    locations && locations.sort((a,b)=> (a.my_id < b.my_id ? 1 : -1)).map((location)=>{
                        const idName = location.location.replace(/\s/g , "_").toLowerCase();
                        return <p className='menu-location' key={location.title} onClick={()=>{pageNavigate(idName); openMenu();}}>{location.title}</p>
                    })
                }
                </div>
            </div>
            ) : (
            <div className='menu-items'>
                <div className='menu-btn-close'>
                    <AiFillCloseCircle onClick={openMenu} />
                </div>
                <p className='btn login-btn' onClick={()=>{handleLoginForm(); blurSet(); openMenu();}} >Login</p>
                <p className='btn locations-list-btn' onClick={() => {openList(); handleAccordionOpen();}} >Locations {accordionOpen ? <BsChevronUp /> : <BsChevronDown />}</p>
                <div className='menu-locations'>
                {
                    locations && locations.sort((a,b)=> (a.my_id < b.my_id ? 1 : -1)).map((location)=>{
                        const idName = location.location.replace(/\s/g , "_").toLowerCase();
                        return <p className='menu-location' key={location.title} onClick={()=>{pageNavigate(idName); openMenu();}}>{location.title}</p>
                    })
                }
                </div>
            </div>
            )
        }
      <Footer />
     { loginForm==='on' && (
        <div>
          <div onClick={()=>{handleLoginForm(); blurSet();}} className='popup-back'>
            <div onClick={()=>{handleLoginForm(); blurSet();}} className='x btn'><AiFillCloseCircle/></div>
          </div>
            <Login
              setEmail={setEmail}
              setPassword={setPassword}
              loginFormOn={() => loginFormOn()}
              handleAction={() => handleAction()}
              blurSet={()=> blurSet()}
              // className="Login popup"
              // popup={loginForm}
              />
        </div>
      )
    }
    {
         locationForm==='on' && (
        <div>
          <div onClick={()=>{handleLocationForm(); blurSet();}} className='popup-back'>
            <div onClick={()=>{handleLocationForm(); blurSet();}} className='x btn'><AiFillCloseCircle/></div>
          </div>
            <LocationForm
              locationFormOn={() => locationFormOn()}
              blurSet={()=> blurSet()}
              // className="Login popup"
              // popup={loginForm}
              db={db}
              newId={newId}
              />
        </div>
        )
    }
    </div>
  );
}

export default App;
