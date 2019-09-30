import React from "react"

import CustomLink from "../../components/link/link.component"

import {
  InfoContainer,
  CheersContainer,
  DetailsContainer,
  TextContainer,
} from "./info.styles"
import Video from "../video/video.component"

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
          <p>The Baucom Residence</p>
          <p>35 N Mountain Ave</p>
          <p>Melrose, MA</p>
        </div>
        <div className="note">
          <p>Katie Jo is already so lucky to have such wonderful family friends,</p><p>that you are all the gift she needs.</p>
        </div>
      </TextContainer>
    </DetailsContainer>
    <CustomLink to="/rsvp" inverted="true">
      RSVP
    </CustomLink>
    <Video />
  </InfoContainer>
)

export default Info
