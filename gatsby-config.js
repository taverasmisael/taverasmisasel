module.exports = {
  siteMetadata: {
    siteUrl: 'https://taverasmisael.com',
    title: 'Misael Taveras',
    description: `Misael Taveras - Frontend developer. Website y blog personal enfocado en la programación frontend`,
    author: 'Misael Taveras',
    socialHandler: '@taverasmisael',
    footerCopy:
      'Me encanta programar y compartir lo que he aprendido, asi que cree un website justo para eso',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/shared/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        srcSetBreakpoints: [200, 340, 520, 890],
        defaultQuality: 75,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-material-ui',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: { color: 'green', showSpinner: false },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Overpass Mono:400,700:latin', // Titles
            'Roboto:400,500:latin', // Body
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: false,
              enableCustomId: true,
              removeAccents: true,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_self',
              rel: 'nofollow',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: ['gatsby-remark-images'],
      },
    },
  ],
}
