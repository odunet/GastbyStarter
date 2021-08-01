const path = require('path');
const data = require('./src/data/dataPage');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  console.log(data);
  console.log('==========================================');

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

  console.log(JSON.stringify(mdPages));
  console.log('===============================');

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
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
