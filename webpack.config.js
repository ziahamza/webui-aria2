const path = require("path");
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const BUILD_DIR = path.join(__dirname, "build");
const APP_DIR = path.join(__dirname, "src", "js");

const config = {
  entry: {
    app: APP_DIR + "/app.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].js"
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new webpack.ProvidePlugin({
      "window.jQuery": "jquery",
      jQuery: "jquery",
      $: "jquery"
    }),
    new HtmlWebpackPlugin({
      template: "src/index-template.html",
      inject: "head"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src/js"), path.resolve("./src/scss")]
  }
};

module.exports = config;
