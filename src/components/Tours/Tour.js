import React from 'react'
import Img from "gatsby-image"
import classes from "../../css/tour.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
//import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const getDefault = graphql`
{
  default: file(relativePath:{ eq: "defaultBcg.jpeg" }){
      childImageSharp {
          fluid{
              ...GatsbyImageSharpFluid
          }
      }
  }
}
`

const Tour = ({tour}) => {
    const defaultImage = useStaticQuery(getDefault)
    const {name ,price, country, days, slug, images} = tour
    const mainImage = images ? images[0].fluid : defaultImage.default.childImageSharp.fluid
    return (
        <article className={classes.tour}>
           <div className={classes.imgContainer}>
               <Img fluid={mainImage} className={classes.img} alt={name} />
               <AniLink fade className={classes.link} to={`/tours/${slug}`}>details</AniLink>
           </div>
           <div className={classes.footer}>
            <h3>{name}</h3>
            <div className={classes.info}>
    <h4 className={classes.country}>
     <FaMap className={classes.icon}/>
     {country}
    </h4>
    <div className={classes.details}>
    <h6>{days} days</h6>
    <h6>from {price}</h6>
    </div>
            </div>
           </div>
        </article>
    )
}

// Tour.propTypes = {
//     name: PropTypes.string.isRequired,
//     country: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     days: PropTypes.number.isRequired,
//     slug: PropTypes.string.isRequired,
//     featured: PropTypes.bool,
//     images: PropTypes.arrayOf(PropTypes.object)
// }

export default Tour
