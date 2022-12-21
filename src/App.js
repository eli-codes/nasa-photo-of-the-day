import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";

import "./App.css";

import NasaPhoto from './Components/NasaPhoto';

//do styling after imports but before your function in global scope

const Background= styled.div`
  background-color: black;
`

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setData(res.data);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <Background className="App">
     { data && <NasaPhoto photo={data} /> }
    </Background>
  );
}

export default App;