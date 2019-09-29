import styled from "styled-components"

export const Card = styled.article`
  background: rgba(255,255,255,0.95);
  color: rgba(193, 138, 255, 1);
  padding: 2rem;
  margin: 1rem auto;
  width: 60%;
  box-shadow: 0px 0px 10px 4px rgba(193, 138, 255, 0.95);
  transition: 0.25s;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 0px 0px 10px 4px rgba(255, 128, 239, 0.95);
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0.1rem;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }

`

export const FormWrapper = styled.div`
  padding: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  form {
    text-align: left;
  }
  .form-error {
    margin: 0 0 1rem 0;
    font-style: italic;
    color: red;
    text-align: center;
  }
  label {
    margin-bottom: 1rem;
    text-align: left;
    font-size: 1.25rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    box-sizing: border-box;
    margin: auto;
    padding: 0.25rem;
    font-size: 1rem;
    border: 1px solid RGBA(68, 142, 199, 0.3);
    &:focus {
      outline: 0;
      border-color: #d81103;
    }
  }
  select {
    font-size: 1.25rem;
  }

  .same-line {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    align-items: baseline;
    margin: 0.5rem 0;
    @media (min-width: 767px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`
