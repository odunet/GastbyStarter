const path = require('path');
const data = require('./src/data/dataPage');
require('dotenv').config()
const { createFilePath } = require(`gatsby-source-filesystem`);

// gatsby-node.js
exports.onPostBootstrap = () => {
  console.log("*****************")
  console.log(process.env)
  console.log("*****************")

}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;


  /**
   * GENERIC TEMPLATE
   */
  // console.log(data);
  // console.log('==========================================');

  data.forEach((page) => {
    createPage({
      path: page.slug + '/',
      component: path.resolve('./src/templates/Generic.js'),
      context: {
        title: page.title,
        description: page.description,
      },
    });
  });

  /**
   * MARKDOWN TEMPLATE
   */
  const mdPages = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // console.log(JSON.stringify(mdPages));
  // console.log('===============================');

  //create page
  mdPages.data.allMarkdownRemark.edges.map(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/Markdown.js'),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  /**
   * AIRTABLE TEMPLATE
   */
  const airPages = await graphql(`
    query {
      allAirtable {
        edges {
          node {
            data {
              Categories
              Name
              Role
              Start_Date
              Attachments {
                url
              }
            }
            table
          }
        }
      }
    }
  `);

  // console.log(JSON.stringify(airPages, null, 2));
  // console.log('===============================');

  //create page
  airPages.data.allAirtable.edges.map(({ node }) => {
    createPage({
      path: node.data.Name,
      component: path.resolve('./src/templates/AirTable.js'),
      context: {
        slug: node.data.Name,
        data: node
      },
    });
  });


};

exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    console.log(value);
    console.log('===========================');

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};


/**
 *  Helper to manage unavailable fromtatter fields to prevent error. E.G, my query of 
 * no existent mentor field should not give error.
 *  */

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`

    type MarkdownRemark implements Node @infer {
      frontmatter: MarkdownRemarkFrontmatter!
    }


    type MarkdownRemarkFrontmatter @infer {
      mentor: String
      date: Date @dateformat
    }
  `)
}