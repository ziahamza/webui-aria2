const path = require("path");
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

const BUILD_DIR = path.join(__dirname, "docs");
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
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "flags/"
            }
          }
        ]
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].js"
  },
  plugins: [
    new CleanWebpackPlugin(["docs"]),
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
    }),
    new WorkboxPlugin.GenerateSW()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: "vendor", chunks: "all" }
      }
    }
  },
  resolve: {
    modules: [
      path.resolve("./"),
      path.resolve("./node_modules"),
      path.resolve("./src/js"),
      path.resolve("./src/scss")
    ]
  }
};

module.exports = config;
