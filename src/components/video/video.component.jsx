import React from "react"
import {
  Player,
  BigPlayButton,
  ControlBar,
} from "video-react"

import { VideoContainer } from "./video.styles"

const Video = () => (
  <VideoContainer>
    <Player
      playsInline
      src="https://builtbybaucom.com/assets/kj-1year-movie.mov"
    >
      <BigPlayButton position="center" />
      <ControlBar autoHide={false} />
    </Player>
  </VideoContainer>
)

export default Video
