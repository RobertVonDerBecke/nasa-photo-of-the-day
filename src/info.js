import React from "react";
import styled, { keyframes } from 'styled-components';

const StyledInfo = styled.div`
	max-width: 40%;



`

export default function Info(props) {
	const { nasaData } = props;

	return (
		<StyledInfo>
			<h2>{nasaData.copyright}</h2>
			<p>{nasaData.explanation}</p>
		</StyledInfo>
	);
}