import styled, {keyframes} from "styled-components"

import kidPic from "../../images/kj-1m.png"
import oldPic from "../../images/kj-11m.png"

const pulse = keyframes`
  0% {
    transform: scale(0.5);
  }
  10% {
    transform: scale(0.75);
  }
  20% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.15);
  }
  40% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  60% {
    transform: scale(1);
  }
  70% {
    transform: scale(1.15);
  }
  80% {
    transform: scale(1);
  }
  90% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 70%;
  padding: 2rem 0;
  margin: 0 auto;
  color: #FFFAFE;
  background-color: rgba(255,120,192,0.75);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 4px rgba(193, 138, 255, 0.95);

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const CheersContainer = styled.div`
  animation: ${pulse} 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  display: flex;

  .gatsby-image-wrapper {
    margin: 0 0.5rem;
  }

  .text {
    margin: 0 15px;

    @media screen and (max-width: 767px) {
      margin: 0 auto;
      width: 50%;
    }
  }
`

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
  border-radius: 50%;
  animation: ie-image-slideshow 7s ease infinite alternate;
  background-size: contain;
  background-image: url(${kidPic}), url(${oldPic});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 0px 0px, 250px 0px;\

  @supports (-webkit-appearance:none) {
    animation: image-slideshow 7s ease infinite alternate;
  }

  @media screen and (max-width: 767px) {
    width: 150px;
    height: 150px;
  }
`

export const DetailsContainer = styled.div`
  margin: 2rem 0;
  width: 100%;

  @media screen and (max-width: 767px) {
    margin: 1rem 0;
  }
`

export const TextContainer = styled.div`
  background-color: #C18AFF;
  color: #FFFAFE;
  text-align: center;
  padding: 1rem;

  .when {
    padding-bottom: 1rem;
  }

  h3 {
    background-color: #FF80F0;
    padding: 1rem;
  }

  h3,
  p {
    margin: 0.5rem auto;
  }

  .bbq-link,
  .hotel-phone-link {
    font-weight: 700;
    box-shadow: inset 0 -2px 0 0 #FF80F0;
    margin: 0 0.15rem;
    border-bottom: 1px solid #FF80F0;

    &:hover {
      background: #FF80F0;
    }
  }

  .lodging p:last-child {
    font-size: 0.9rem;
  }
`
