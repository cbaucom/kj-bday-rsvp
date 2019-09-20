import styled, { css, keyframes } from "styled-components"
import { Link } from "gatsby"

const heartbeat = keyframes`
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  20% {
    transform: scale(0.90);
    animation-timing-function: ease-in;
  }
  40% {
    transform: scale(0.95);
    animation-timing-function: ease-out;
  }
  60% {
    transform: scale(0.90);
    animation-timing-function: ease-in;
  }
  75% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }

`

const sharedStyles = css`
  width: auto;
  height: 50px;
  text-decoration: none;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  justify-content: center;
  color: #fefefe;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 4px RGBA(250, 250, 250, 0.8),
    inset 0 1px 0 0 rgba(193, 138, 255, 0.75),
    inset 0 2px 4px 0 rgba(193, 138, 255, 0.95);
  z-index: 10;

  &:hover {
    animation: ${heartbeat} 1.5s ease-in-out both;
  }

  @media (min-width: 767px) {
    min-width: 150px;
  }
`

const buttonStyles = css`
  background-color: #ff80f0;

  &:hover {
    background-color: #c18aff;
    border: 1px solid #ff80f0;
  }
`

const invertedButtonStyles = css`
  background-color: #c18aff;

  &:hover {
    background-color: #ff80f0;
    border: 1px solid #c18aff;
  }
`

const getButtonStyles = props => {
  return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  ${sharedStyles}

  ${getButtonStyles}
`

export const CustomLinkContainer = styled(Link)`
  ${sharedStyles}

  ${getButtonStyles}
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
