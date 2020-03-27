const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      tours: allContentfulTours(filter: { node_locale: { eq: "en-US" } }) {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPosts(filter: { node_locale: { eq: "en-US" } } sort: { fields: published, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.posts.edges.forEach(({ node }) => {
    return createPage({
      path: `blog/${node.slug}`,
      component: path.resolve(`./src/template/blog-template.js`),
      context: {
        slug: node.slug
      }
    });
  });

  data.tours.edges.forEach(({ node }) => {
    return createPage({
      path: `tours/${node.slug}`,
      component: path.resolve(`./src/template/tour-template.js`),
      context: {
        slug: node.slug
      }
    });
  });

  const posts = data.posts.edges
  const postsPerPage = 4
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({length: numPages}).forEach((_,i)=>{
    createPage({
      component: path.resolve(`./src/template/blog-list-template.js`),
      path: i===0 ? `/blogs` : `/blogs/${i+1}`,
      context:{
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currnetPage: i + 1
      }
    })
  })

};
