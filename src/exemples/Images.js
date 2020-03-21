import React from 'react'
import styled from 'styled-components'
import imgDef from "../images/defaultBcg.jpeg"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Images = () => {
    const data = useStaticQuery(graphql`
    {
  fixed: file(relativePath: { eq: "connectBcg.jpeg" }){
    childImageSharp{
      fixed(width:300 height:150){
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
  fluid: file(relativePath: { eq: "defaultBcg.jpeg" }){
    childImageSharp{
      fluid(maxWidth: 400){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
    `)
  
   const fixed = data.fixed.childImageSharp.fixed;
   const fluid =  data.fluid.childImageSharp.fluid;
    return (
        <Wrapper>
            <div><img src={imgDef} alt="img" className="basic" /></div>
            <div><Img fixed={fixed} /></div>
            <div><Img fluid={fluid} /></div>
        </Wrapper>
    )
}
    const Wrapper = styled.div`
     text-align: center;
     width: 80vw;
     margin: 0 auto 10rem auto;
     div{
         border: 2px solid green;
     }
     .basic{
         width: 100%;
     }
    `
export default Images
