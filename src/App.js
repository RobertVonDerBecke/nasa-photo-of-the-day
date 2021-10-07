import React, { useState, useEffect } from "react";
import axios from "axios";
import Img from "./Img";
import { BASE_URL, API_KEY } from "./constants/index.js";
import "./App.css";

function App() {
	const [nasaData, getNasaData] = useState([]);
	const [date, setDate] = useState('2012-03-14');

  useEffect(()=> {
    const e = document.querySelector('#selectDate')
    e.addEventListener('change', () =>{
      console.log(e.value)
      setDate(e.value)
    })
  },[])
	useEffect(() => {
		axios
			.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
			.then((resp) => {
				getNasaData(resp.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [date]);

	// if (!props.photoOfTheDay) return <h3>Loading...</h3>;
	return (
		<div className="App">
			<Img nasaData={nasaData} />
			{/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
		</div>
	);
}

export default App;
