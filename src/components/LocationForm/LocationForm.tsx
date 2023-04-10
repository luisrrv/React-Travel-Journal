import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { db } from '../../firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
// import { styled } from '@mui/material/styles';

function LocationForm({locationFormOn, blurSet, db, newId}) {
  const [disabled, setDisabled] = useState(true);

  const usersCollectionRef = collection(db, "Places");
  const [allLocations, setAllLocations] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImg, setCoverImg] = useState('');
  const [dates, setDates] = useState({});
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [location, setLocation] = useState('');
  const [pics, setPics] = useState(['','','','','','','','','','']);
  const [piptN, setPiptN] = useState(1);
  
  const iptsCheck = () => {
    setDates({start: dateStart, end: dateEnd});
    const ipts = document.querySelectorAll('input');
    let filled = 0;
    ipts.forEach(ipt=>{
        ipt.value!=='' && (filled += 1);
    });
    filled === ipts.length ? setDisabled(false) : setDisabled(true);
  }
  const addpipt = ()=> {
    piptN<10 && setPiptN(piptN + 1);
  }

  const pushPics = (e,i)=> {
    (i===0) && setPics([e,pics[1],pics[2],pics[3],pics[4],pics[5],pics[6],pics[7],pics[8],pics[9]]);
    (i===1) && setPics([pics[0],e,pics[2],pics[3],pics[4],pics[5],pics[6],pics[7],pics[8],pics[9]]);
    (i===2) && setPics([pics[0],pics[1],e,pics[3],pics[4],pics[5],pics[6],pics[7],pics[8],pics[9]]);
    (i===3) && setPics([pics[0],pics[1],pics[2],e,pics[4],pics[5],pics[6],pics[7],pics[8],pics[9]]);
    (i===4) && setPics([pics[0],pics[1],pics[2],pics[3],e,pics[5],pics[6],pics[7],pics[8],pics[9]]);
    (i===5) && setPics([pics[0],pics[1],pics[2],pics[3],pics[4],e,pics[6],pics[7],pics[8],pics[9]]);
    (i===6) && setPics([pics[0],pics[1],pics[2],pics[3],pics[4],pics[5],e,pics[7],pics[8],pics[9]]);
    (i===7) && setPics([pics[0],pics[1],pics[2],pics[3],pics[4],pics[5],pics[6],e,pics[8],pics[9]]);
    (i===8) && setPics([pics[0],pics[1],pics[2],pics[3],pics[4],pics[5],pics[6],pics[7],e,pics[9]]);
    (i===9) && setPics([pics[0],pics[1],pics[2],pics[3],pics[4],pics[5],pics[6],pics[7],pics[8],e,]);
  }
  
  const createLocation = async () => {
      const picsTaken = []; 
      pics.forEach(e=>{
        e!=='' && picsTaken.push(e);
      });
      await addDoc(usersCollectionRef, {
          my_id: newId,
          title: title, 
          description: description,
          cover_img: coverImg,
          dates: dates,
          location: location,
          pics: picsTaken,
        })
        const data = await getDocs(usersCollectionRef);
        setAllLocations(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        console.log(allLocations);
        alert("New location added to your journal");
        setTimeout(()=>{
            localStorage.clear();
            window.location.reload();
        },2000);
    };
        
  const handleClick = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <div className='login-form location-form' onClick={locationFormOn} >
            <div className="heading-container">
                <h3>add a new location to your journal</h3>
            </div>
            <ThemeProvider theme={darkTheme}>

              <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1 },
                  }}
                  noValidate
                  autoComplete="off"
                  >
                <div className='manager-login-form'>
                    <TextField
                    required
                    key="title"
                    id="title"
                    label="Title"
                    placeholder='City, Country'
                    variant="outlined"
                    type="title"
                    className={'login-text-form'}
                    onChange={(e) => {setTitle(e.target.value); iptsCheck();}}
                    />
                    <TextField
                    required
                    key="description"
                    id="description"
                    label="Description"
                    placeholder=''
                    type="description"
                    variant="outlined"
                    className='login-text-form'
                    onChange={(e) => {setDescription(e.target.value); iptsCheck();}}
                    />
                    <TextField
                    required
                    key="coverImg"
                    id="coverImg"
                    label="Cover Image (url)"
                    type="coverImg"
                    variant="outlined"
                    className='login-text-form'
                    onChange={(e) => {setCoverImg(e.target.value); iptsCheck();}}
                    />
                    <TextField
                    required
                    key="dates1"
                    id="dates"
                    label="Trip start date"
                    placeholder='1 January, 2020'
                    type="dates"
                    variant="outlined"
                    className='login-text-form'
                    onChange={(e) => {setDateStart(e.target.value); iptsCheck();}}
                    />
                    <TextField
                    required
                    key="dates2"
                    id="dates"
                    label="Trip end date"
                    placeholder='1 January, 2020'
                    type="dates"
                    variant="outlined"
                    className='login-text-form'
                    onChange={(e) => {setDateEnd(e.target.value); iptsCheck();}}
                    />
                    <TextField
                    required
                    key="location"
                    id="location"
                    label="Location (city)"
                    placeholder='CITY NAME'
                    type="location"
                    variant="outlined"
                    className='login-text-form'
                    onChange={(e) => {setLocation(e.target.value); iptsCheck();}}
                    />
                    <h3>Pics taken during the trip</h3>
                    <div className='pics-inputs'>
                        {
                            [...Array(piptN)].map((_e, i) => {
                                return  <TextField
                                            required
                                            key={(i+1).toString()}
                                            id={`pic${i+1}`}
                                            label={`Picture ${i+1} url`}
                                            type="pics"
                                            variant="outlined"
                                            className='login-text-form'
                                            onChange={(e) => {pushPics(e.target.value,i); iptsCheck();}}
                                        />
                            })
                        }
                    </div>
                    { piptN < 10 && <Button onClick={addpipt}>add more pics</Button> }
                </div>

              </Box>
            </ThemeProvider>

            <Button
              variant="contained"
              disabled={disabled}
              onClick={() => { createLocation(); handleClick(); blurSet(); }}
              className="login-btn add-location-btn"
              >
              Add
            </Button>
        </div>
  )
}

export default LocationForm
