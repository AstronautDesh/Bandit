const path = require('path');

module.exports = {
  style: {
    postcss: {
      plugins: [require('autoprefixer')]
    }
  },
  webpack: {
    configure: (webpackConfig) => {
      // Add any webpack configurations here
      return webpackConfig;
    }
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig }) => {
          const postCssLoaderOptions = {
            postcssOptions: {
              config: path.resolve(__dirname, 'postcss.config.js'),
            },
          };

          const rules = webpackConfig.module.rules;
          const oneOfRule = rules.find((rule) => rule.oneOf);
          if (oneOfRule) {
            const cssRule = oneOfRule.oneOf.find(
              (rule) => rule.test && rule.test.toString().includes('css')
            );
            if (cssRule) {
              const postCssLoader = cssRule.use.find(
                (loader) => loader.loader && loader.loader.includes('postcss-loader')
              );
              if (postCssLoader) {
                postCssLoader.options = postCssLoaderOptions;
              }
            }
          }

          return webpackConfig;
        },
      },
    },
  ],
};