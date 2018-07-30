const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  devServer: {
    contentBase: './dist',
    port: 8081,
    inline: true
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.css$/,
      exclude: path.resolve(__dirname, 'node_module'),
      loader: ["style-loader", "css-loader"]
    }
  ]
  }
};

module.exports = config;

