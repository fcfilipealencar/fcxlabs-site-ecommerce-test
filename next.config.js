// @ts-no-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: false,
    images: {
        domains: [
            "fercos-s3-ecommerce.s3.amazonaws.com",
            "https://fercos-s3-ecommerce.s3.amazonaws.com",
            "d3gcmglegmnvz8.cloudfront.net",
            "https://d3gcmglegmnvz8.cloudfront.net",
        ],
    },
    pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts", "page.cy.ts"],
    env: {
        GOOGLE_ID: `${process.env.GOOGLE_ID}`,
        GOOGLE_SECRET: `${process.env.GOOGLE_SECRET}`,
        SITE_URL: `${process.env.SITE_URL}`,
    },
    // webpack: (config, options) => {
    //     if (!options.isServer) {
    //         // webpack configurations
    //         config.plugins.push(
    //             new options.webpack.container.ModuleFederationPlugin({
    //                 name: "shared",
    //                 filename: "static/chunks/remoteEntry.js",
    //                 // remoteType: "var",
    //                 exposes: {
    //                     // expose all component here.
    //                     "./layout": "./src/components/Layout",
    //                 },
    //                 // shared: [
    //                 //     {
    //                 //         react: {
    //                 //             eager: true,
    //                 //             singleton: true,
    //                 //             requiredVersion: false,
    //                 //         },
    //                 //     },
    //                 //     {
    //                 //         "react-dom": {
    //                 //             eager: true,
    //                 //             singleton: true,
    //                 //             requiredVersion: false,
    //                 //         },
    //                 //     },
    //                 // ],
    //             })
    //         );
    //     }
    //     return config;
    // },
};

const moduleExports = {
    ...nextConfig,
    sentry: {
        hideSourceMaps: true,
    },
};

const sentryWebpackPluginOptions = {
    silent: true, // Suppresses all logs,
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
