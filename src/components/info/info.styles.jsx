import styled from "styled-components"

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding: 2rem 0;
  margin: 0 auto;
  color: #fffafe;

  @media (max-width: 767px) {
    width: 100%;
    padding: 1rem 0;
  }
`

export const CheersContainer = styled.div`
  display: flex;
  padding: 1rem;

  .text h2 {
    font-family: 'Hello';
    font-size: 3rem;
    font-style: normal;
    font-weight: 100;

    @media (max-width: 600px) {
      font-size: 2.5rem;
    }
  }

  .text h3 {
    font-size: 2.5rem;
    font-weight: 400;

    @media (max-width: 600px) {
      font-size: 2.25rem;
    }
  }

  .party {
    padding-top: 2rem;
    font-family: "TimeToParty";
    color: #C18AFF;
    font-size: 6rem;
  }
`

export const DetailsContainer = styled.div`
  margin: 3rem 0;
  width: 100%;

  @media screen and (max-width: 600px) {
    margin: 2rem 0;
  }
`

export const TextContainer = styled.div`
  background-color: #c18aff;
  color: #fffafe;
  text-align: center;
  padding: 3rem 1rem;
  font-size: 1.5rem;

  .when, .where {
    padding-bottom: 1rem;
  }

  .note {
    font-size: 1rem;

    p {
      margin: 0 auto;
    }
  }

  h3 {
    background-color: #ff80f0;
    padding: 1rem;
  }

  h3,
  p {
    margin: 0.5rem auto;
  }
`
