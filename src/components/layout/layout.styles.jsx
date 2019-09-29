import styled from "styled-components"
import bg from '../../images/kj-bday-pattern.png'

export const LayoutContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background: RGBA(166, 208, 195, 1.00)
    url(${bg}) center;

  color: #FFFAFE;
  `

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 1024px;

  .gatsby-image-wrapper {
    display: block;
    width: 100%;
    height: auto;
    z-index: 10;
  }
`

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1024px;
  color: #fff;
  background: #A6D0C3;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 767px) {
    margin: 0 auto 4rem;
  }
`

export const FooterContainer = styled.footer`
  padding: 0.5rem;
  margin: 4rem auto 0;
  display: flex;
  justify-content: center;
  background-color: rgba(193, 138, 255, 0.75);
  box-shadow: 0px 0px 10px 4px RGBA(250, 250, 250, 0.8),
    inset 0 1px 0 0 rgba(193, 138, 255, 0.75),
    inset 0 2px 4px 0 rgba(193, 138, 255, 0.5);
  border-radius: 10px 10px 0 0;

  a {
    color: #FFFAFE;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    transition: all ease-in-out 0.5s;

    &:hover {
      font-size: 1.3rem;
    }
  }
`