module.exports = {
  siteMetadata: {
    siteUrl: `https://www.tokyoteriyakiwok.com`,
    title: "Tokyo Teriyaki & Wok",
    description: "Serving delicious Teriyaki in Marysville, WA."
  },
  plugins: [`react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-1T28FFB775", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },
  ],
}
