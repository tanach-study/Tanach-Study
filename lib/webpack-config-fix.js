// https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/#update-css-modules-class-names-that-use-dashes
const cssLoaderRe = /\/css-loader\//;
const targetFile = '.module.css';

const processRule = (rule) => {
  if (rule.oneOf) {
    return {
      ...rule,
      oneOf: rule.oneOf.map(processRule),
    };
  }

  if (!rule.test.test(targetFile)) {
    return rule;
  }

  if (Array.isArray(rule.use)) {
    return {
      ...rule,
      use: rule.use.map((use) => {
        if (!cssLoaderRe.test(use.loader)) {
          return use;
        }

        // adjust css-loader options
        return {
          ...use,
          options: {
            ...use.options,
            camelCase: false,
          },
        };
      }),
    };
  }

  return rule;
};

function onCreateWebpackConfig({ getConfig, actions }) {
  const config = getConfig();

  const newConfig = {
    ...config,
    module: {
      ...config.module,
      rules: config.module.rules.map(processRule),
    },
  };
  actions.replaceWebpackConfig(newConfig);
}

module.exports = {
  onCreateWebpackConfig,
};
