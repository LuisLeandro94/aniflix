import styled, { css } from 'styled-components';

export const ItemImage = styled.img`
	width: 100%;
	transition: transform 0.5s ease;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;

	${ItemImage}:hover {
		transform: scale(1.5) !important;
		transition: transform 0.5s ease;
	}
`;

export const Content = styled.div`
	margin-top: 40px;
	height: 300px;
	position: relative;
`;

export const Background = styled.div`
	display: flex;
	height: 100%;
`;

export const Left = styled.div`
	background: black;
	width: 30%;
	position: relative;

	&:before {
		content: '';
		position: absolute;
		background-image: linear-gradient(to right, #000, transparent);
		top: 0;
		bottom: 0;
		left: 100%;
		width: 275px;
	}
`;

export const Right = styled.div`
	background: green;
	width: 70%;
`;

export const ContentContainer = styled.div`
	color: white;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 30px;
`;

export const ItemContainer = styled.div`
	width: 20%;
`;

export const sharedButtonStyles = css`
	background-color: transparent;
	position: absolute;
	z-index: 1;
	top: 50%;
	transform: translateY(-50%);
	border: 0;
	width: 6rem;
	height: 100%;
	justify-content: center;
	align-items: center;
	padding: 0;

	&:not(:disabled) {
		cursor: pointer;
		fill: #1bcacd;
	}

	&:disabled {
		fill: #e9e9e9;
	}
`;

export const ButtonPrev = styled.button`
	${sharedButtonStyles}
	left: 0;
	cursor: pointer;
	opacity: 0;

	&:hover {
		opacity: 1;
	}
`;

export const ButtonSvg = styled.svg`
	width: 1.5rem;
	height: 1.5rem;
`;

export const ButtonWrapper = styled.div`
	background-color: rgba(0, 0, 0, 0.2);
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
`;

export const ButtonNext = styled.button`
	${sharedButtonStyles}
	right: 0;
	cursor: pointer;
	opacity: 0;

	&:hover {
		opacity: 1;
	}
`;
