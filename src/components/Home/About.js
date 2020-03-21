import React from 'react'
import Title from "../Title"
import classes from "../../css/about.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const About = () => {

 const data = useStaticQuery(graphql`
    {
  data: file(relativePath: { eq: "defaultBcg.jpeg" }){
    childImageSharp{
      fluid(quality:100 maxWidth: 600){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
    `)

const aboutImage = data.data.childImageSharp.fluid
    return (
        <section className={classes.about}>
            <Title title="about" subtitle="us" />
            <div className={classes.aboutCenter}>
                <article className={classes.aboutImg}>
                    <div className={classes.imgContainer}>
                       <Img fluid={aboutImage} alt="about image" />
                    </div>
                </article>
                <article className={classes.aboutInfo}>
                    <h4>explore the difference</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </article>
                <button type="button" className="btn-primary">read more</button>
            </div>
        </section>
    )
}

export default About
