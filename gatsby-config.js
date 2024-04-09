/**
 * @type {import('gatsby').GatsbyConfig}
 * 
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  token: process.env.STRAPI_TOKEN,
  collectionTypes: [{
      singularName:"product",
      queryParams:{
        populate:{
          image:"*",
          ref_store:"*",
          categorie:"*",
          Gender:"*"
        }
      }
    },
    {
      singularName:"categorie",
      queryParams:{
        populate:{
          products:"*",
        }
      }
    }
  ],
};
module.exports = {
  siteMetadata: {
    title: `Giselle`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [ {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",{
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
        "name": "brands",
        "path": "./src/images/brands"
      },
      __key: "brands_images"
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