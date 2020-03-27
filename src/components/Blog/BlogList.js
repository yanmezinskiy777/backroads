import React from "react";
import BlogCard from "./BlogCard";
import Title from "../Title";
import { useStaticQuery, graphql } from "gatsby";
import classes from "../../css/blog.module.css";

const getPosts = graphql`
  {
    posts: allContentfulPosts(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          title
          contentful_id
          published(formatString: "D M YY")
          slug
          image {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts);
  console.log(posts);

  return (
    <div>
      <section className={classes.blog}>
        <Title title="our" subtitle="blogs" />
      </section>
      <div className={classes.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.contentful_id} blog={node} />;
        })}
      </div>
    </div>
  );
};

export default BlogList;
