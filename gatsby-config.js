module.exports = {
  siteMetadata: {
    title: `KatieJo's 1st Birthday`,
    description: `You are invited to help celebrate KatieJo turning 1 year old!`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KatieJo's 1st bday`,
        short_name: `KJ's 1st bday`,
        start_url: `/`,
        background_color: `#FF80F0`,
        theme_color: `#FF80F0`,
        display: `minimal-ui`,
        icon: `src/images/llama-square.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-77649451-7",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
