const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
} );

console.log(__dirname);
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }, 
      },
      {
        test: /\.css$/i,
        use: ['css-loader',]
    }
    ],
  },
  optimization: {
    minimize: true,
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./templates/frontend/index.html"),
    }),
    new webpack.EnvironmentPlugin(Object.keys(dotenv.parsed || {})),
    ],
};