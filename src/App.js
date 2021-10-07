import React, { useState, useEffect} from "react";
import axios from 'axios';
import Img from './Img'
import { BASE_URL, API_KEY } from './constants/index.js'
import "./App.css";

function App() {
  const [nasaData, getNasaData ] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then(resp => {
      getNasaData(resp.data)
      console.log(resp.data)
    }).catch(err => {
      console.error(err);
    })
  }, [])

  // if (!props.photoOfTheDay) return <h3>Loading...</h3>;
  return (
    <div className="App">
      <Img  nasaData={nasaData} />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
