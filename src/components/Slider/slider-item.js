import React, { useEffect, useState } from 'react';
import {
  Episodes,
  Info,
  ItemContainer,
  ItemDataContainer,
  ItemImage,
  ItemName,
  ItemVideo,
  Rating,
  Score,
} from './styles';

const SliderItem = ({ anime }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <ItemContainer
      id='image'
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
      <ItemImage
        src={anime.images.jpg.large_image_url}
        className={
          hovered && anime.trailer.embed_url ? 'imgHover' : 'notHover'
        }></ItemImage>
      <ItemVideo
        className={hovered && anime.trailer.embed_url ? 'hovered' : ''}>
        <iframe
          src={anime.trailer.embed_url}
          title={anime.title}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop'
        />
      </ItemVideo>
      <ItemDataContainer>
        {anime.title}
        <Info>
          <Score>{anime.score}/10</Score>
          <Rating>{anime.rating.replace(/\D/g, '').slice(0, 2)}+</Rating>
          <Episodes>{anime.episodes} eps.</Episodes>
        </Info>
      </ItemDataContainer>
    </ItemContainer>
  );
};

export default SliderItem;
