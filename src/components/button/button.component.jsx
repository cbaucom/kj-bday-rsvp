import React from "react"
import PropTypes from "prop-types"

import { CustomButtonContainer } from "./button.styles";

const Button = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}
  </CustomButtonContainer>
)

Button.defaultProps = {
  title: `Click Me`,
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Button
