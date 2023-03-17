import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { db } from '../../firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
// import { styled } from '@mui/material/styles';

function LocationForm({locationFormOn, blurSet, db, newId}) {
  const [disabled, setDisabled] = useState(false);

  const usersCollectionRef = collection(db, "Places");
  const [allLocations, setAllLocations] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImg, setCoverImg] = useState('');
  const [dates, setDates] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [location, setLocation] = useState('');
  const [pics, setPics] = useState([]);
  const [pipts, setPipts] = useState(
    [
        <TextField
            required
            id="pics"
            label="Picture url"
            type="pics"
            variant="outlined"
            className='login-text-form'
            onChange={(e) => setPics(pics.push(e.target.value))}
        />
  ]);
  console.log(pipts)

  const createLocation = async () => {
    setDates({start: dateStart, end: dateEnd});
    await addDoc(usersCollectionRef, {
        my_id: newId,
        title: title, 
        description: description,
        cover_img: coverImg,
        dates: dates,
        location: location,
        pics: pics,
    })
    const data = await getDocs(usersCollectionRef);
    console.log(data);
    setAllLocations(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
  };

  const addPicInput = () => {
    if(pipts.length>9) return;
    setPipts(pipts.push(
        <TextField
            required
            key={pipts.length}
            id="pics"
            label="Picture url"
            type="pics"
            variant="outlined"
            className='login-text-form'
            onChange={(e) => setPics(pics.push(e.target.value))}
        />
    ));
    console.log(pipts);
  }

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
                    id="title"
                    label="Title"
                    placeholder='City, Country'
                    variant="outlined"
                    type="title"
                    className={'login-text-form'}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                    required
                    id="description"
                    label="Description"
                    placeholder=''
                    type="description"
                    variant="outlined"
                    className='login-text-form'
                    onChange={(e) => setDescription(e.target.value)}
                    />
                    <TextField
                    required
                    id="coverImg"
                    label="Cover Image (url)"
                    type="coverImg"
                    variant="outlined"
                    className='login-text-form'
                    onChange={(e) => setCoverImg(e.target.value)}
                    />
                    <TextField
                    required
                    id="dates"
                    label="Trip start date"
                    placeholder='1 January, 2020'
                    type="dates"
                    variant="outlined"
                    className='login-text-form'
                    onChange={(e) => setDateStart(e.target.value)}
                    />
                    <TextField
                    required
                    id="dates"
                    label="Trip end date"
                    placeholder='1 January, 2020'
                    type="dates"
                    variant="outlined"
                    className='login-text-form'
                    onChange={(e) => setDateEnd(e.target.value)}
                    />
                    <TextField
                    required
                    id="location"
                    label="Location (city)"
                    placeholder='CITY NAME'
                    type="location"
                    variant="outlined"
                    className='login-text-form'
                    onChange={(e) => setLocation(e.target.value)}
                    />
                    <h3>Pics taken during the trip</h3>
                    <div className='pics-inputs'>
                        {
                            pipts.map((pipt)=>{
                                return pipt;
                            })
                        }
                        {/* <TextField
                        required
                        id="pics"
                        label="Picture url"
                        type="pics"
                        variant="outlined"
                        className='login-text-form'
                        onChange={(e) => setPics(pics.push(e.target.value))}
                        /> */}
                    </div>
                    <Button onClick={addPicInput}>add more pics</Button>
                </div>

              </Box>
            </ThemeProvider>

            <Button
              variant="contained"
              disabled={disabled}
              onClick={() => { createLocation(); handleClick(); blurSet(); }}
              className="login-btn"
              >
              Add
            </Button>
        </div>
  )
}

export default LocationForm
