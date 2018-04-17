const rewireEmotion = require('react-app-rewire-emotion');
const path = require('path');

module.exports = function override(config, env) {
  config.resolve = Object.assign({}, config.resolve, {
    alias: { 'react-library': path.resolve(__dirname + '/../', 'src') },
  });

  config.module.rules = config.module.rules.concat({
    test: /\.(png|jpg|gif|svg)$/,
    loaders: ['url-loader'],
    // use: [
    //   {
    //     loader: 'url-loader',
    //     options: {
    //       limit: 8192,
    //     },
    //   },
    // ],
    include: path.resolve(__dirname, '../'),
  });

  return rewireEmotion(config, env, {
    sourceMap: true,
    autoLabel: true,
    inline: true,
  });
};
