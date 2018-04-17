const rewireEmotion = require('react-app-rewire-emotion');
const path = require('path');

/* config-overrides.js */
module.exports = function override(config, env) {
  config.resolve = Object.assign({}, config.resolve, {
    alias: { 'react-library': path.resolve(__dirname + '/../', 'src') },
  });
  return rewireEmotion(config, env, {
    sourceMap: true,
    autoLabel: true,
    inline: true,
  });
};
