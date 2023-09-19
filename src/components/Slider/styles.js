import styled, { css } from 'styled-components';
import { GrayOne, White } from '../../styles/_colors';

export const ItemDataContainer = styled.div`
  display: none;
  background-color: ${GrayOne};
  color: ${White};
  width: 100%;
  height: fit-content;
  padding: 1vh;
  box-sizing: border-box;
  transition: opacity 300ms ease-out, border-radius 200ms ease-out;
  font-family: 'Netflix Sans', sans-serif;
  border-radius: 0 0 2% 2%;
`;

export const ItemImage = styled.div`
  width: 100%;
  transition: transform 0.5s ease;
  border-radius: 2% 2% 0 0;
  height: 100%;
  object-fit: cover;
  display: block;
  background-size: cover !important;
  background: ${({ src }) => `url(${src})`};
  background-position: center !important;
`;

export const ItemVideo = styled.div`
  width: 100%;
  transition: transform 0.5s ease;
  border-radius: 2% 2% 0 0;
  height: 100%;
  object-fit: cover;
  display: block;
  background-size: cover !important;
  background-position: center !important;
  display: none;
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
  width: 20vw;
  height: 20vh;
  margin: 0 0.2vw;
  z-index: 1;
  transition: transform 100ms ease-out, border-radius 200ms ease-out;

  &:hover {
    border: 2%;
    transform: scale(1.5) !important;
    box-shadow: 0 0 2px #000a;

    ${ItemDataContainer} {
      display: block;
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  max-height: 20vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  max-height: 20vh;
  margin: 0 10vh;

  .hovered {
    display: block;

    iframe {
      border: none;
      width: 100%;
      height: 100%;
    }
  }

  .imgHover {
    display: none;
  }

  .notHover {
    display: block;
  }

  &:hover ${ItemContainer} {
    transform: translateX(-25%);
  }

  ${ItemContainer}:hover ~ ${ItemContainer} {
    transform: translateX(25%);
  }

  ${ItemContainer}:hover {
    transform: translate(0);
  }
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
  max-height: 20vh;

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
`;

export const Info = styled.div`
  font-size: 8px;
  margin-top: 12px;
`;

export const Score = styled.span`
  color: green;
  padding: 1px 2px;
  font-weight: bold;
`;

export const Rating = styled.span`
  border: 0.1px solid ${White};
  padding: 1px 2px;
  color: ${White};
`;

export const Episodes = styled.span`
  color: ${White};
  padding: 1px 2px;
`;
