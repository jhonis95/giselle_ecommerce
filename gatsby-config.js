/**
 * @type {import('gatsby').GatsbyConfig}
 * 
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["categorie", "gender", "product", "supplier"],
  singleTypes: [],
  maxParallelRequests: 20, // (Optional) Default: Number.POSITIVE_INFINITY
  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    Referer: "https://your-site-domain/",
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
};
module.exports = {
  siteMetadata: {
    title: `Giselle`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-transformer-json", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "categories_icons",
        "path": "./src/images/categories_icons"
      },
      __key: "categories_icons"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "categories_icons",
        "path": "./src/images/brands"
      },
      __key: "categories_icons"
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    }
  ]
};
exports.onCreateWebpackConfig = ({
  stage,
  plugins,
}) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
             process: 'process/browser',
      }),
    ],
    devtool: "eval-source-map"
  })
}