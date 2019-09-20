import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import CustomLink from "../../components/link/link.component"
import {
  InfoContainer,
  CheersContainer,
  ImageContainer,
  DetailsContainer,
  TextContainer,
} from "./info.styles"

const Info = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "balloons.png" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <InfoContainer>
      <ImageContainer />
      <CheersContainer>
        <Img fixed={data.file.childImageSharp.fixed} alt="balloons" />
        <div className="text">
          <h2>Katie Jo is turning 1 </h2>
          <p>and we're having a party!</p>
        </div>
        <Img fixed={data.file.childImageSharp.fixed} alt="balloons" />
      </CheersContainer>
      <DetailsContainer>
        <TextContainer>
          <div className="when">
            <p>Sunday, October 20th at Eleven</p>
          </div>
          <div className="where">
            <p>35 N Mountain Ave. Melrose, MA</p>
          </div>
        </TextContainer>
      </DetailsContainer>
      <CustomLink to="/rsvp" inverted="true">
        RSVP
      </CustomLink>
    </InfoContainer>
  )
}

export default Info
