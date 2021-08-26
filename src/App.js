import React from 'react';

import styled from 'styled-components';

import PatternImage from './images/pattern-bg.png';
import ResultBox from './components/ResultBox';
import SearchBox from './components/SearchBox';

const HeaderContainer = styled.div`
	background-image: url(${PatternImage});
	background-position: center;
	width: 100vw;
	height: 13rem;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 15rem;
	width: 100vw;
`;

const Header = styled.h1`
	font-size: 1.6rem;
	color: #fff;
`;

function App() {
	return (
		<>
			<HeaderContainer>
				<Content>
					<Header>IP Address Tracker</Header>
					<SearchBox />
					<ResultBox />
				</Content>
			</HeaderContainer>
		</>
	);
}

export default App;
