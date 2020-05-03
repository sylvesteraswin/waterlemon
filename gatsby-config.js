const path = require("path");
const activeEnv =
  process.env.ACTIVE_ENV || process.env.NODE_ENV || "development";

if (activeEnv === "development") {
  require("dotenv").config({
    path: `.env.${activeEnv}`,
  });
}

let ghostConfig;

try {
  ghostConfig = require("./.ghost.json");
} catch (e) {
  ghostConfig = {
    production: {
      apiUrl: process.env.GHOST_API_URL,
      contentApiKey: process.env.GHOST_CONTENT_API_KEY,
    },
  };
} finally {
  const { apiUrl, contentApiKey } =
    process.env.NODE_ENV === "production"
      ? ghostConfig.development
      : ghostConfig.production;

  if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
    throw new Error(
      `GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`
    ); // eslint-disable-line
  }
}

module.exports = {
  siteMetadata: {
    meta: {
      keywords: "Memories,Sylvester Aswin,Photography,Berlin,Germany",
      description:
        "Come checkout out how Sylvester Aswin sees the world though his camera lens.",
    },
    siteUrl: "https://www.waterlemonstudios.com",
    postsPerPage: 12,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: path.join(__dirname, "src", "layout/index.tsx"),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options:
        process.env.NODE_ENV === `development`
          ? ghostConfig.development
          : ghostConfig.production,
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-ramda`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`postcss-nested`),
          require(`autoprefixer`),
          require(`cssnano`),
        ],
      },
    },
    "gatsby-plugin-robots-txt",
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 80,
      },
    },
    `gatsby-plugin-preact`,
  ],
};
