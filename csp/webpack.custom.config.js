/* Custom webpack properties. */

const Dotenv = require('dotenv-webpack');
const webpackConfig = {
  plugins: [new Dotenv()]
};

module.exports = webpackConfig; // Export all custom Webpack configs.
