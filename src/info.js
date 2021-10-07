import React from "react";

export default function Info(props) {
	const { nasaData } = props;

	return (
		<div className="container">
			<h2>{nasaData.copyright}</h2>
			<p>{nasaData.explanation}</p>
		</div>
	);
}