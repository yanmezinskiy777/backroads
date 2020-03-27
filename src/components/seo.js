import React from 'react'
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const getSeo = graphql`
{
  site{
    siteMetadata{
      siteTitle: title
      siteDesc: description
      siteUrl
      imgae
    }
  }
}
`

const Seo = ({ title, description }) => {
    const {site} = useStaticQuery(getSeo)
    const {  siteTitle, siteDesc, siteUrl, image } = site.siteMetadata
    return (
        <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${ siteTitle}`}>
            <meta name="description" content={description || siteDesc} />
            <meta name="image" content={image} />

            <meta property="og:url" content={siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDesc} />
            <meta property="og:image" content={`${siteUrl}${image}`} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="300" />
        </Helmet>
    )
}

export default Seo
