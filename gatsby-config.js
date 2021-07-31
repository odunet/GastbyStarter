module.exports = {
  siteMetadata: {
    title: 'My Gatsby Site',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
