import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/Home/StyledHero"
import classes from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/SingleTour/Day"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const query = graphql`
query($slug: String!){
  tour: contentfulTours(slug: { eq: $slug }){
    name
    price
    days
    country
    description{
        description
    }
    start(formatString: "DD MMMM, dd YYYY")
    list{
      day
      info
    }
    images{
      fluid{
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
}
`

const tourTemplate = ({data}) => {
    console.log(data)
   const {  name, price, days, country, description:{description}, 
   start, images, list } = data.tour
   console.log(images)
   const [mainImage, ...tourImages] = images
   console.log(mainImage)
   console.log(tourImages)

    return (
    <Layout>
        {mainImage && (<StyledHero img={mainImage.fluid} />)}
        <section className={classes.template}>
            <div className={classes.center}>
                <div className={classes.images}>
                    {tourImages && tourImages.map((item, index) => {
                       return <Img key={index} fluid={item.fluid} alt="single tour" className={classes.image} />
                    })}
                </div>
                <h2>{name}</h2>
                <div className={classes.info}>
                    <p>
                        <FaMoneyBillWave className={classes.icon} />
                        starting from {price}
                    </p>
                    <p>
                        <FaMap className={classes.icon} />
                        {country}
                    </p>
                </div>
                <h4>starts on: {start}</h4>
                <h4>duration: {days}</h4>
                <p className={classes.desc}>{description}</p>
                <h2>Daly schedule</h2>
                <div className={classes.journey}>
                    {list.map((item,index)=>{
                        return <Day key={index} day={item.day} info={item.info} />
                    })}
                </div>
                <AniLink fade to="/tours" className="btn-primary">go back</AniLink>
            </div>
        </section>
    </Layout>
    )
}

export default tourTemplate
