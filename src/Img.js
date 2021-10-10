import React from "react";
import styled, { keyframes } from 'styled-components';
const kf = keyframes`
100% {
  opacity: 1;
  transform scale(1) rotateZ(0);
}`


const StyledImg = styled.div`
opacity: 0;
transform: scale(2) rotate(90deg);
animation: ${kf} 0.5s ease-in-out forwards;
max-width: 40%;
.row {
	max-width: 50%;
}
img {
	/* max-width: 45%; */
	/* padding: 2%; */
	margin: 2%;

}
`


export default function Img(props) {
	const { nasaData } = props;

	return (
		<StyledImg className='row'>
			<h2>{nasaData.title}</h2>
			<img src={nasaData.url} alt="sup"></img>
            <label for='selectDate'>Select a date to display the Picture taken on that day! </label>
			<input type="date" id="selectDate" name="selectDate" />
		</StyledImg>
	);
}
