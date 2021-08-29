import React, { useRef, useState, useEffect } from 'react';

import styled from 'styled-components';

import PatternImage from './images/pattern-bg.png';
import ResultBox from './components/ResultBox';
import SearchBox from './components/SearchBox';
import Map from './components/Map';

const HeaderContainer = styled.div`
	background-image: url(${PatternImage});
	background-position: center;
	width: 100vw;
	height: 13rem;
	position: relative;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 18rem;
	width: 100vw;
	position: absolute;
	z-index: 10;

	@media ${({ theme }) => theme.mediaQueries['below-925']} {
		height: 20rem;
	}
	@media ${({ theme }) => theme.mediaQueries['below-425']} {
		height: 30rem;
	}
	@media ${({ theme }) => theme.mediaQueries['below-320']} {
		height: 32rem;
	}
`;

const Header = styled.h1`
	font-size: 1.6rem;
	color: #fff;
`;

function App() {
	const [location, setLocation] = useState({
		ip: '',
		address: '',
		timezone: '',
		isp: '',
		position: [37.40599, -122.078514],
	});
	const [ip, setIP] = useState('8.8.8.8');
	const inputRef = useRef('');
	const API_KEY = process.env.REACT_APP_API_KEY;

	function handleSearch() {
		const ipValidator =
			/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
		if (ipValidator.test(inputRef.current.value)) setIP(inputRef.current.value);
	}
	useEffect(() => {
		fetch(`https://geo.ipify.org/api/v1?apiKey=at_${API_KEY}&ipAddress=${ip}`)
			.then((res) => res.json())
			.then((data) => {
				setLocation({
					ip: data.ip,
					address: `${data.location.region}, ${data.location.city} ${data.location.postalCode}`,
					timezone: data.location.timezone,
					isp: data.isp,
					position: [data.location.lat, data.location.lng],
				});
			});
	}, [ip, API_KEY]);

	return (
		<>
			<HeaderContainer>
				<Content>
					<Header>IP Address Tracker</Header>
					<SearchBox handleSearch={handleSearch} inputRef={inputRef} />
					<ResultBox
						ip={location.ip}
						address={location.address}
						timezone={location.timezone}
						isp={location.isp}
					/>
				</Content>
			</HeaderContainer>
			<Map position={location.position} />
		</>
	);
}

export default App;
