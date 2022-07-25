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
        trackingId: "G-1T28FFB775", 
      },
    },
  ],
}
