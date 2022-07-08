require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const hostname = 'relab.cc';
// const pathPrefix = 'styled-gatsby-starter-2';

module.exports = {
  siteMetadata: {
    title: 'Best Food To Know',
    description: 'Best Food To Know',
    siteUrl: `https://${hostname}`,
  },
  trailingSlash: "always",
  plugins: [
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `${process.env.WORDPRESS_URL}/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_ANALYTICS_ID, // Google Analytics / GA
        ],
      },
    },
  ],
}
