import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/Home/StyledHero"
import Banner from "../components/Banner"
import { graphql } from "gatsby"
import About from "../components/Home/About"
import Servises from "../components/Home/Servises"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FeaturedTours from "../components/Home/FeaturedTours"
import Seo from "../components/seo"

export default function index({data}) {
  
  return(
  <Layout>
    <Seo title="Home" description="home backrods description" />
    <StyledHero home="true" img={data.bg.childImageSharp.fluid}>
      <Banner title="continue exploring" info="You can check tours">
        <AniLink to="/tours" className="btn-white">
          explore tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Servises />
    <FeaturedTours />
  </Layout>
)
}

export const query = graphql`
  query {
     bg: file(relativePath: { eq: "defaultBcg.jpeg" }){
    childImageSharp{
      fluid(maxWidth:4000 quality:100){
        ...GatsbyImageSharpFluid
      }
    }
   }
   }
`