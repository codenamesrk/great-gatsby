module.exports = {
  siteMetadata: {
    title: 'Great Gatsby',
  },
  plugins: [
    'gatsby-plugin-mdx',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
