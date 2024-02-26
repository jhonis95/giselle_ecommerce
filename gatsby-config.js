/**
 * @type {import('gatsby').GatsbyConfig}
 * 
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: "http://127.0.0.1:1337",
  accessToken: "a65d8114acdd091aabd665df0f3e7e5d789a27ceb6d8fcaebae3c0e9e285497a1fff3057ca43db7e582ad0e31eee87c1e093a1e4bbcaffac2205640c3a2a6d5b4426ee88905212c6d2c49de07df8c52354019389e6db3c9f9f16983b4c8ed0f27c73f24b8e024e96381c04e304c2b97b2091feb2e10408e609d0cb4f61e8497c",
  collectionTypes: ["categorie", "gender", "product", "supplier"],
  // singleTypes: [],
  //maxParallelRequests: 20, // (Optional) Default: Number.POSITIVE_INFINITY
  // remoteFileHeaders: {
  //   /**
  //    * Customized request headers
  //    * For http request with a image or other files need authorization
  //    * For expamle: Fetch a CDN file which has a security config when gatsby building needs
  //    */
  //   // Referer: "https://127.0.0.1:1337",
  //   // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  // },
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
        "name": "categories_icons",
        "path": "./src/images/brands"
      },
      __key: "categories_icons"
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