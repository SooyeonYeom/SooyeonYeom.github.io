// next.config.js
module.exports = {
    webpack(config) {
      config.resolve.alias['styled-components'] = require.resolve('styled-components');
      return config;
    },
  };
  