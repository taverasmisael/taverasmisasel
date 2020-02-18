const { resolve } = require('path')
const siteMetadata = require('./site-metadata.json')

const {
  api: { projectId, dataset },
} = requireSanityConfig('../studio/sanity.json')

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Series',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve('./src/pages'),
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve('./src/shared/assets'),
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve('./posts'),
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve('./series'),
        name: 'series',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: resolve('./projects-list'),
        name: 'projects',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-145300876-1',
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
      options: { color: '#ed1250', showSpinner: false },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: { exclude: ['/contacto-exito'] },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Overpass Mono:400,700', // Titles
            'Roboto:300,400,500&display=swap', // Body
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
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              colorTheme: 'Horizon Bold',
              extensions: [
                {
                  identifier: 'jolaleye.horizon-theme-vscode',
                  version: '2.0.2',
                },
              ],
              extensionDataDirectory: resolve('.vscode-extensions'),
            },
          },
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              withWebp: true,
              traceSVG: { color: 'transparent', background: '#535c81' },
            },
          },
        ],
        plugins: ['gatsby-remark-images', 'gatsby-remark-vscode'],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: siteMetadata.siteUrl,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-redirect-from',
      options: {
        query: 'allMdx',
      },
    },
    'gatsby-plugin-meta-redirect',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId,
        dataset,
        // In case we need to use this feature
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
  ],
}

/**
 * We're requiring a file in the studio folder to make the monorepo
 * work "out-of-the-box". Sometimes you would to run this web frontend
 * in isolation (e.g. on codesandbox). This will give you an error message
 * with directions to enter the info manually or in the environment.
 */

function requireSanityConfig(path) {
  try {
    return require('../studio/sanity.json')
  } catch (e) {
    console.error(
      'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
    )
    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || '',
        dataset: process.env.SANITY_DATASET || '',
      },
    }
  }
}