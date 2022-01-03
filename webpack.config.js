<<<<<<< HEAD
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  devtool: 'inline-source-map',
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dev',
      template: path.join(__dirname, 'index.html'),
    }),
  ],
};
=======
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  devtool: 'inline-source-map',
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test:/\.css$/,
        use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "postcss-loader"
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dev',
      template: path.join(__dirname, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename:"styles.css",
    }),
  ],
};
>>>>>>> 6b7d5623375974be08ad00b39884d6c5647a4774
