import React, { useState, useEffect } from "react";
import axios from "axios";
import Img from "./Img";
import Info from "./info";
import styled, { keyframes } from 'styled-components';
import { BASE_URL, API_KEY } from "./constants/index.js";
import "./App.css";

const StyledApp = styled.div`
display: flex;
margin: 2%;
`
function App() {
	const [nasaData, getNasaData] = useState([]);
	const [date, setDate] = useState([nasaData.date]);

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
		<StyledApp>
			<Img nasaData={nasaData} className='something'/>
      		<Info nasaData={nasaData} />
		</StyledApp>
	);
}

export default App;
