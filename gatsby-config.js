const { populate } = require('dotenv');

/**
 * @type {import('gatsby').GatsbyConfig}
 * 
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: "https://5e6f-2804-14d-1a87-cd01-e9a8-269e-8d4b-791.ngrok-free.app",
  token: "f164a1023175ba7ef79217b0be36a3616244eace984c67385e96590ec0e0081ae12fdb4d40ca90563c2669ba3ab156ffb2dcf7c8376265b52929c38442105397be3ad3c3637d32aa0c24bb8b0c66c6e9c16284eeb9c4ac0ad96a4a7889512752d7e2ee71fb2589567658746fa8aa3f021d32ebfcadb520c6ff2fd1dcc12d2082",
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