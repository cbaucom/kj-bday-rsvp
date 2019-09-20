import React from "react"

import Layout from "../components/layout/layout.component"
import Info from "../components/info/info.component"
import SEO from "../components/seo/seo.component"

const IndexPage = () => (
  <Layout>
    <SEO title="Happy Birthday, KatieJo!" />
    <Info />
  </Layout>
)

export default IndexPage
