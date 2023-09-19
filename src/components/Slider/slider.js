import React, { useCallback, useEffect, useState } from 'react';
import { NextButton, PrevButton } from './buttons';
import SliderItem from './slider-item';
import { Container, Wrapper } from './styles';

const animeList = [
  {
    img: 'https://repository-images.githubusercontent.com/495123519/031de714-e4c1-447c-9cbd-a79a57ec9cf4',
  },
  {
    img: 'https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg',
  },
  {
    img: 'https://repository-images.githubusercontent.com/495123519/031de714-e4c1-447c-9cbd-a79a57ec9cf4',
  },
  {
    img: 'https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg',
  },
  {
    img: 'https://repository-images.githubusercontent.com/495123519/031de714-e4c1-447c-9cbd-a79a57ec9cf4',
  },
  {
    img: 'https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg',
  },
  {
    img: 'https://repository-images.githubusercontent.com/495123519/031de714-e4c1-447c-9cbd-a79a57ec9cf4',
  },
  {
    img: 'https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg',
  },
];

const Slider = ({ slidesToShow, slides }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevSlide = () => {
    const resetToVeryBack = currentImageIndex === 0;

    const index = resetToVeryBack ? slides.length - 1 : currentImageIndex - 1;

    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const resetIndex = currentImageIndex === slides.length - 1;

    const index = resetIndex ? 0 : currentImageIndex + 1;

    setCurrentImageIndex(index);
  };

  const activeImageSourcesFromState = slides.slice(
    currentImageIndex,
    currentImageIndex + slidesToShow
  );

  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < slidesToShow
      ? [
          ...activeImageSourcesFromState,
          ...slides.slice(0, slidesToShow - activeImageSourcesFromState.length),
        ]
      : activeImageSourcesFromState;

  return (
    <Wrapper>
      <Container>
        {imageSourcesToDisplay.map((anime, index) => (
          <SliderItem key={index} anime={anime} />
        ))}
      </Container>
      <PrevButton prevSlide={prevSlide} />
      <NextButton nextSlide={nextSlide} />
    </Wrapper>
  );
};

export default Slider;
