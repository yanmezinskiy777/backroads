import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/Home/StyledHero"
import { graphql } from "gatsby"

export default function tours({data}) {
  return <Layout>
    <StyledHero img={data.bg.childImageSharp.fluid}>

    </StyledHero>
  </Layout>
}

export const quert = graphql`
query {
     bg: file(relativePath: { eq: "connectBcg.jpeg" }){
    childImageSharp{
      fluid(maxWidth:4000 quality:100){
        ...GatsbyImageSharpFluid
      }
    }
   }
   }
`