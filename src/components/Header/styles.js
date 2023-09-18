import { Grid } from '@mui/material';
import styled from 'styled-components';
import { Black, White } from '../../styles/_colors';

export const GridItem = styled(Grid)`
	align-items: center;
`;

export const GridContainer = styled(Grid)`
	background-color: ${Black};
	align-items: center;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	padding: 25px 60px;
	justify-content: space-between;
	align-items: center;
	background-color: ${Black};
`;

export const Item = styled.a`
	color: ${White};
	font-family: 'Netflix Sans', sans-serif;
	font-weight: ${({ active }) => (active ? '900' : '600')};
	line-height: normal;
	cursor: pointer;
	text-decoration: none;
`;

export const RightPanel = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;
