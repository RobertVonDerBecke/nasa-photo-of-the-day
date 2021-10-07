import React from "react";

export default function Img(props) {
	const { nasaData } = props;

	return (
		<div className="container">
			<h2>{nasaData.title}</h2>
			<img src={nasaData.url} alt="sup"></img>
			<input type="date" id="selectDate" />
			<p>{nasaData.explanation}</p>
		</div>
	);
}
