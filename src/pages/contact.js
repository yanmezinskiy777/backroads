import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/Home/StyledHero"
import Contact from "../components/Contact/Contact"

export default function contact(props) {
  console.log(props)
const bg = props.data.bg.childImageSharp.fluid
  console.log(bg)
  return <Layout>
  <StyledHero img={bg}>
  </StyledHero>
  <Contact/>
  </Layout>
}

export const query = graphql`
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
