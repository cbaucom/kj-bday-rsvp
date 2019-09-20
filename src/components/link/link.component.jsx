import React from "react"

import { CustomLinkContainer } from "../button/button.styles";

const CustomLink = ({ children, ...props }) => (
  <CustomLinkContainer {...props}>{children}
  </CustomLinkContainer>
)

export default CustomLink
