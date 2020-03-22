const path = require("path")

exports.createPages = async ({ graphql, actions }) =>{
    const {createPage} = actions
    const {data} = await graphql(`
    {
    tours: allContentfulTours(filter: { node_locale: { eq: "en-US"} }){
    edges{
      node{
       slug      
      }
      }
    }
  }
`)

data.tours.edges.forEach(({node})=>{
    return createPage({
        path: `tours/${node.slug}`,
        component: path.resolve(`./src/template/tour-template.js`),
        context: {
            slug: node.slug
        }
    })
})

}