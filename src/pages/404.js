import React from "react"
import Layout from "../components/Layout"
import classes from "../css/error.module.css"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Seo from "../components/seo"
function error() {
  return (
    <Layout>
      <Seo title="error" />
      <header className={classes.error}>
        <Banner title="this page does not exist">
          <AniLink to="/" className="btn-white">Go home</AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
