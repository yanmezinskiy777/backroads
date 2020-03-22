import React from 'react'
import TourList from "./TourList"
import {useStaticQuery, graphql } from "gatsby"

const getTours = graphql`
{
 tours: allContentfulTours(filter: { node_locale: { eq: "en-US"} }){
    totalCount
    edges{
      node{
        contentful_id
        name
        days
        slug
        country
        price
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

const Tours = () => {
    const {tours} = useStaticQuery(getTours)
    console.log(tours)
    return (
     
            <TourList tours={tours} />

    )
}

export default Tours
