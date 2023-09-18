import React from 'react';
import { ItemContainer, ItemImage } from './styles';

const SliderItem = ({ anime }) => {
	return (
		<ItemContainer>
			<ItemImage src={anime.img} />
		</ItemContainer>
	);
};

export default SliderItem;
