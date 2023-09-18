import React, { useCallback, useState } from 'react';
import { NextButton, PrevButton } from './buttons';
import SliderItem from './slider-item';
import { Container } from './styles';

const animes = [
	{
		img: 'https://repository-images.githubusercontent.com/495123519/031de714-e4c1-447c-9cbd-a79a57ec9cf4',
	},
	{
		img: 'https://repository-images.githubusercontent.com/495123519/031de714-e4c1-447c-9cbd-a79a57ec9cf4',
	},
	{
		img: 'https://repository-images.githubusercontent.com/495123519/031de714-e4c1-447c-9cbd-a79a57ec9cf4',
	},
	{
		img: 'https://repository-images.githubusercontent.com/495123519/031de714-e4c1-447c-9cbd-a79a57ec9cf4',
	},
	{
		img: 'https://repository-images.githubusercontent.com/495123519/031de714-e4c1-447c-9cbd-a79a57ec9cf4',
	},
	{
		img: 'https://repository-images.githubusercontent.com/495123519/031de714-e4c1-447c-9cbd-a79a57ec9cf4',
	},
	{
		img: 'https://repository-images.githubusercontent.com/495123519/031de714-e4c1-447c-9cbd-a79a57ec9cf4',
	},
	{
		img: 'https://repository-images.githubusercontent.com/495123519/031de714-e4c1-447c-9cbd-a79a57ec9cf4',
	},
];
const Slider = () => {
	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

	const scrollPrev = console.log(123123);
	const scrollNext = console.log(123123);

	return (
		<Container>
			{animes.map((anime) => (
				<SliderItem anime={anime} />
			))}
			<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
			<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
		</Container>
	);
};

export default Slider;
