import React, { useEffect } from "react"
import ConfettiGenerator from "confetti-js"
import styled from "styled-components"
import balloons from "../images/balloons.png"

import Layout from "../components/layout/layout.component"
import SEO from "../components/seo/seo.component"
import CustomLink from "../components/link/link.component"

const Container = styled.div`
  background: rgba(255, 250, 254, 0.6);
  color: #9438fc;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  white-space: nowrap;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  text-align: center;
  box-shadow: 0px 0px 10px 4px rgba(193, 138, 255, 0.95);

  img {
    height: 4rem;
    width: 4rem;
  }

  .text-wrapper {
    height: 100%;
    box-sizing: border-box;
    white-space: pre-wrap;
  }
  .text-wrapper > * {
    z-index: 9;
    position: relative;
    top: 0;
  }

  canvas {
    z-index: 1;
    position: absolute;
    left: 0;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
`

export default props => {
  useEffect(() => {
    const confettiSettings = { target: "confetti-canvas" }
    const confetti = new ConfettiGenerator(confettiSettings)
    confetti.render()

    return () => confetti.clear()
  }, [])

  if (typeof window !== "undefined") {
    return (
      <Layout>
        <SEO title="Thanks" />
        <>
          <Container>
            <div className="text-wrapper">
              <h1>Thanks, {props.location.state.name}! </h1>
              <img src={balloons} alt="balloons" />
              <h3>We can't wait to see you!</h3>
            </div>
            <CustomLink to="/">Back Home</CustomLink>
            <canvas id="confetti-canvas"></canvas>
          </Container>
        </>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title="Thanks" />
        <>
          <Container>
            <div className="text-wrapper">
              <h1>Thanks!</h1>
              <img src={balloons} alt="balloons" />
              <h3>We can't wait to see you!</h3>
            </div>
            <CustomLink to="/">Back Home</CustomLink>
            <canvas id="confetti-canvas"></canvas>
          </Container>
        </>
      </Layout>
    )
  }
}
