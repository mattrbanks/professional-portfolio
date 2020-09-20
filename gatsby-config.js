module.exports = {
  siteMetadata: {
    title: `Matthew R Banks`,
    description: `This is my personal portfolio website. This is where all my latest projects live and it serves as a central hub for people to get in touch with me for web development work. This site was built with Gatsby.`,
    author: `Matthew R Banks`,
    image: `src/images/portfolio-social-media-meta.png`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `babel-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/PortfolioPicture.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
