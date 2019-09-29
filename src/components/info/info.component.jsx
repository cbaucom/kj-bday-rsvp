import React from "react"

import CustomLink from "../../components/link/link.component"

import {
  InfoContainer,
  CheersContainer,
  DetailsContainer,
  TextContainer,
} from "./info.styles"

const Info = () => (
  <InfoContainer>
    <CheersContainer>
      <div className="text">
        <h3>Kathryn Joanne</h3>
        <h2>is turning one </h2>
        <h3>and we're having a</h3>
        <p className="party">party!</p>
      </div>
    </CheersContainer>
    <DetailsContainer>
      <TextContainer>
        <div className="when">
          <p>Sunday, October 20th</p>
          <p>11 am - 1 pm</p>
        </div>
        <div className="where">
          <p>Hosted by the Baucoms</p>
          <p>35 N Mountain Ave</p>
          <p>Melrose, MA</p>
        </div>
      </TextContainer>
    </DetailsContainer>
    <CustomLink to="/rsvp" inverted="true">
      RSVP
    </CustomLink>
  </InfoContainer>
)

export default Info
