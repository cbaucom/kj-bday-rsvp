import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "typeface-montserrat"
import "./layout.css"

import {
  LayoutContainer,
  MainContainer,
  FooterContainer,
} from "./layout.styles"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.5/es6-shim.min.js" />
          <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2Ces2015%2Ces2016%2Ces2017%2Ces2018%2Ces6%2Ces7%2Ces5%2CArray.from%2CMap%2CObject.keys%2CObject.values%2CSet%2CSymbol%2Cfetch%2Cnavigator.geolocation%2CrequestAnimationFrame" />
          <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
        </Helmet>
        <LayoutContainer>
          <MainContainer>{children}</MainContainer>
          <FooterContainer>
            <a href="https://builtbybaucom.com">Built by Baucom</a>
          </FooterContainer>
        </LayoutContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
