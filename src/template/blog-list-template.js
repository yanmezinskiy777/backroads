import React from 'react'
import Layout from "../components/Layout"
import BlogCard from "../components/Blog/BlogCard"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Title from "../components/Title"
import classes from "../css/blog.module.css"
import { graphql } from "gatsby"

export const query = graphql`
query getPosts($limit: Int!, $skip: Int!){
  posts: allContentfulPosts(sort: { fields: published order: DESC } filter: { node_locale: { eq: "en-US"}} limit: $limit skip: $skip){
    edges{
      node{
        slug
        title
        published(formatString:"YYYY MM DD")
        contentful_id
        image{
          fluid{
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

const BlogListTemplate = (props) => {
  
  const {numPages, currnetPage} = props.pageContext
  
    const {data} = props

    const nextPage = `/blogs/${currnetPage + 1}`
    const prevPage = currnetPage-1 === 1 ? `/blogs` : `/blogs/${currnetPage - 1}`

    const isFirst = currnetPage === 1 ? true : false
    const isLast = currnetPage === numPages ? true : false

    return (
    <Layout>
       <section className={classes.blog}>
           <Title title="lastest" subtitle="posts" />
            <div className={classes.center}>
                {data.posts.edges.map(({node})=>{
                 return <BlogCard key={node.contentful_id} blog={node} />    
                })}
            </div>
            <div className={classes.links}>
             {isLast && <AniLink fade to={prevPage} className={classes.link}>prev</AniLink>}
               {Array.from({length: numPages}, (_,i) => {
                 const activeClass = (i+1) === +currnetPage ? `${classes.active} ${classes.link}` : `${classes.link}`
                 console.log(currnetPage)
                 return <AniLink key={i} fade 
                 className={`${activeClass}`} 
                 to={`/blogs/${i===0 ? "" : i + 1}`}>
                   {i + 1}
                 </AniLink>
               })}
               {isFirst && <AniLink fade to={nextPage} className={classes.link}>next</AniLink>}
            </div>
       </section>
       </Layout>
    )
}

export default BlogListTemplate
