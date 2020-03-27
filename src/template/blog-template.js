import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import classes from "../css/single-blog.module.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const getPost = graphql`
  query($slug: String!) {
    post: contentfulPosts(slug: { eq: $slug }) {
      title
      simpleText {
        simpleText
      }
      text {
        json
      }
      published(formatString: "DD MMMM, dd YYYY")
      image {
        fluid {
          src
        }
      }
    }
  }
`

const blogTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node)
        return (
          <div>
            <h3>awsome image</h3>
            <img width="400" alt="post text rich" src={node.data.target.fields.file["en-US"].url} />
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <section className={classes.blog}>
        <div className={classes.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={classes.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className={`btn-primary`}>
            all posts
        </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default blogTemplate
