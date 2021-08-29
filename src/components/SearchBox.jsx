import React from 'react';
import styled from 'styled-components';

const TextFieldContainer = styled.div`
	position: relative;
	border-radius: 10px;
	overflow: hidden;
`;

const TextField = styled.input`
	width: 25rem;
	height: 3rem;
	border-radius: 10px;
	border: none;
	outline: none;
	font-size: 0.9rem;
	padding-left: 15px;
	font-weight: 500;
	@media ${({ theme }) => theme.mediaQueries['below-320']} {
		width: 72vw;
	}
`;

const CustomButton = styled.button`
	position: absolute;
	right: 0;
	height: 3rem;
	width: 2.7rem;
	border: none;
	outline: none;
	background-color: ${({ theme }) => theme.colors.veryDarkGray};
	cursor: pointer;
`;

function SearchBox({ handleSearch, inputRef }) {
	return (
		<TextFieldContainer>
			<TextField
				ref={inputRef}
				type="text"
				placeholder="Search for any IP address or domain"
				onKeyPress={(e) => {
					if (e.key === 'Enter') handleSearch();
				}}
			/>
			<CustomButton onClick={handleSearch}>
				<svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
					<path fill="none" stroke="#fff" strokeWidth="3" d="M2 1l6 6-6 6" />
				</svg>
			</CustomButton>
		</TextFieldContainer>
	);
}

export default SearchBox;
