import React, { useState, useEffect } from 'react'
import './App.scss';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import Login from './components/Login'
import Data from './Data'
import Footer from './components/Footer';
// import { BsFillPinMapFill } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { app, db } from './firebase-config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'

function App() {
  const usersCollectionRef = collection(db, "Places");
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const getLocations = async () => {
      const data = await getDocs(usersCollectionRef);
      setLocations(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }
    getLocations();
  }, []);
  // console.log(locations.sort((a,b)=> (a.my_id < b.my_id ? 1 : -1)))
  console.log(locations);

  const navigate = useNavigate();
  var reversedData = [...Data].reverse();
  let authToken = sessionStorage.getItem('Auth Token')
  useEffect(() => {
    // authToken ? console.log('Logged in') : console.log('Not logged in');
    document.title = 'My Travel Journal';
    if (authToken) {
      setLoginForm('off');
      // TODO: show edit/add photos form
    }
  }, [authToken]);

  const [loginForm, setLoginForm] = useState('off');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [blur, setBlur] = useState(false);
  // const [users, setUsers] = useState([])
  // const usersCollectionRef = collection(db, "operators");
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

    // createUserWithEmailAndPassword(authentication, email, password) // for creating users (unused for now)

    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        console.log(response);
        toast.success('Logged in');
        navigate('/');
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
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
  const loginFormOn = ()=> {
    setLoginForm('on');
  }
  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token');
    clearInfo();
    toast("Logged out");
    navigate('/');
}
const blurSet = () => {
  // console.log('before',blur);
  (loginForm==='on') ? setBlur(false) : setBlur(true);
  // console.log('after',blur);
}
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
  //   }

  //   getUsers();
  // }, [usersCollectionRef]);

  return (
    <div className={blur ? 'App off' : 'App'} /*nScroll={handleScroll}*/>
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
      {/* <div className="bg"></div> */}
      <Nav />
      <Hero />
      <section id='cards-list' className='cards-list'>
      {/* <div className="all"><BsFillPinMapFill color='#ffae00' /> All Locations</div> */}
      {
        reversedData.map(item => {
          return (
            <Card
                key={item.id}
                item={item}
                // {...item}
              />
          )
        })
      }
      </section>
      { authToken ? (
          <p className='btn login-btn' onClick={handleLogout} >Logout</p>
        ) : (
          <p className='btn login-btn' onClick={()=>{handleLoginForm(); blurSet();}} >Login</p>
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
              className="Login popup"
              popup={loginForm}
              />
        </div>
      )
     }
    </div>
  );
}

export default App;
