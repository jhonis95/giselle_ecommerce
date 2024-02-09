/**
 * @type {import('gatsby').GatsbyConfig}
 */
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