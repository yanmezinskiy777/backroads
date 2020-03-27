import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import StyledHero from "../components/Home/StyledHero";
import BlogList from "../components/Blog/BlogList";
import Seo from "../components/seo"

export default function blog({ data }) {
  return (
    <Layout>
      <Seo title="Blog" />
      <StyledHero img={data.bg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  );
}

export const quert = graphql`
  query {
    bg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
