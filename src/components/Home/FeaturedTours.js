import React from 'react'
import Tour from "../Tours/Tour"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import classes from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const getTours = graphql`
{
  allContentfulTours(filter:{ featured: { eq: true } node_locale: { eq: "en-US" } }){
    edges{
      node{
        contentful_id
        name
        country
        start
        slug
        days
        images{
          fluid{
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
}
`

const FeaturedTours = () => {
    const response = useStaticQuery(getTours)
    const tours = response.allContentfulTours.edges;
    
    return (
        <section className={classes.tours}>
            <Title title="featured" subtitle="tours" />
            <div className={classes.center}>
            {tours.map(({node})=>{
                return <Tour key={node.contentful_id} tour={node} />
            })}
            </div>
           
            <AniLink fade to="/tours" className="btn-primary">all tours</AniLink>
        </section>
    )
}

export default FeaturedTours
