import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
	width: 70vw;
	background-color: #fff;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
	grid-column-gap: 2rem;
	justify-content: space-between;
	border-radius: 15px;
	overflow: hidden;
	padding: 1.5rem;

	/* for the right side border */
	.sideBorder {
		border-right: 1px solid ${({ theme }) => theme.colors.darkGray};
		border-image: linear-gradient(
			to bottom,
			white 15%,
			${({ theme }) => theme.colors.darkGray} 15%,
			${({ theme }) => theme.colors.darkGray} 90%,
			white 90%
		);
		border-image-slice: 1;
	}

	@media ${({ theme }) => theme.mediaQueries['below-1280']} {
		grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
	}
	@media ${({ theme }) => theme.mediaQueries['below-1022']} {
		grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
	}
	@media ${({ theme }) => theme.mediaQueries['below-925']} {
		width: 46vw;
		grid-row-gap: 1rem;
		grid-column-gap: 0;

		.sideBorder {
			border: none;
		}
	}
	@media ${({ theme }) => theme.mediaQueries['below-425']} {
		width: 61vw;
		text-align: center;
		grid-row-gap: 1.5rem;
	}

	@media ${({ theme }) => theme.mediaQueries['below-320']} {
		width: 66vw;
	}
`;

const Header = styled.h3`
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.darkGray};
	margin-bottom: 1rem;
`;

const SubHeader = styled.h1`
	font-size: 1.3rem;
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
