import React from "react";

export default function Img(props) {
	const { nasaData } = props;

	return (
		<div className="container">
			<h2>{nasaData.title}</h2>
			<img src={nasaData.url} alt="sup"></img>
            <br/>
            <label for='selectDate'>Select a date to display the Picture taken on that day! </label>
			<input type="date" id="selectDate" name="selectDate" />
		</div>
	);
}
