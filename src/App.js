import React, { useState, useEffect } from 'react'
import './App.scss';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import Login from './components/Login'
import Data from './Data'
import Footer from './components/Footer';
import { BsFillPinMapFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { app, db } from './firebase-config';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, getDocs, doc } from 'firebase/firestore'

function App() {
  const navigate = useNavigate();
  var reversedData = [...Data].reverse();
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      alert('logged in');
      // navigate('/')
      // show edit/add photos form
    }
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "operators");

  const handleAction = (role) => {
    const authentication = getAuth();

    // createUserWithEmailAndPassword(authentication, email, password) // for creating users (unused for now)

    signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        alert(response);
        navigate('/')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      }).catch((error) => {
        if(error.code === 'auth/wrong-password'){
          // toast.error('Please check the Password');
          alert(error.code);
        }
        if(error.code === 'auth/user-not-found'){
          // toast.error('Please check the Email');
          alert(error.code);
        }
        if(error.code === 'auth/invalid-email'){
          // toast.error('Please enter a valid Email');
          alert(error.code);
        }
      })
  }

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
  //   }

  //   getUsers();
  // }, [usersCollectionRef]);

  return (
    <div className="App" /*nScroll={handleScroll}*/>
      <div className="bg"></div>
      <Nav />
      <Hero />
      <section id='cards-list' className='cards-list'>
      <div className="all"><BsFillPinMapFill color='#ffae00' /> All Locations</div>
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
      <Footer />
      <Login />
    </div>
  );
}

export default App;
