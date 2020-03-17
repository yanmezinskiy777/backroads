import React from "react"
import Layout from "../components/Layout"
import classes from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner"
function error() {
  return (
    <Layout>
      <header className={classes.error}>
        <Banner title="this page does not exist">
          <Link to="/" className="btn-white">Go home</Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default error
