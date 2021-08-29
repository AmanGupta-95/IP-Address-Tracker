import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
	width: 75vw;
	background-color: #fff;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(15rem, 15em));
	justify-content: space-between;
	border-radius: 15px;
	overflow: hidden;
	padding: 1.5rem;

	/* for the right side border */
	.sideBorder {
		border-right: 1px solid hsl(0, 0%, 59%);
		border-image: linear-gradient(
			to bottom,
			white 15%,
			hsl(0, 0%, 59%) 15%,
			hsl(0, 0%, 59%) 90%,
			white 90%
		);
		border-image-slice: 1;
	}
`;

const Header = styled.h3`
	font-size: 0.8rem;
	color: hsl(0, 0%, 59%);
	margin-bottom: 1rem;
`;

const SubHeader = styled.h1`
	font-size: 1.5rem;
`;

function ResultBox({ ip, address, timezone, isp }) {
	return (
		<ResultContainer>
			<div className="sideBorder">
				<Header>IP ADDRESS</Header>
				<SubHeader>{ip}</SubHeader>
			</div>
			<div className="sideBorder">
				<Header>LOCATION</Header>
				<SubHeader>{address}</SubHeader>
			</div>
			<div className="sideBorder">
				<Header>TIMEZONE</Header>
				<SubHeader>{timezone}</SubHeader>
			</div>
			<div>
				<Header>ISP</Header>
				<SubHeader>{isp}</SubHeader>
			</div>
		</ResultContainer>
	);
}

export default ResultBox;
