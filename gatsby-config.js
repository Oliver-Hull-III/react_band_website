
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID || ``,
        accessToken: CONTENTFUL_ACCESS_TOKEN || ``,
        host: `preview.contentful.com`,
      },
    },
  ],
}
