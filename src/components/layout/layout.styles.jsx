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
  background: linear-gradient(
      rgba(255,120,192,0.5),
      rgba(193, 138, 255, 0.5)
    ),
    url(${bg}) center;
  color: #FFFAFE;
  `

export const MainContainer = styled.main`
  width: 90vw;
  max-width: 960px;
  color: #032448;
  margin: 2rem auto;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  @media screen and (max-width: 767px) {
    margin: 0 auto 2rem;
  }
`

export const FooterContainer = styled.footer`
  padding: 0.5rem;
  margin: 0 auto;
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