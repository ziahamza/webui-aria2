let path = require("path");
let webpack = require("webpack");

var BUILD_DIR = path.join(__dirname, "build");
var APP_DIR = path.join(__dirname, "src", "js");

var config = {
  entry: {
    app: APP_DIR + "/app.js"
  },
  module: {},
  output: {
    path: BUILD_DIR,
    filename: "[name].js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      "window.jQuery": "jquery",
      jQuery: "jquery",
      $: "jquery"
    })
  ],
  resolve: {
    modules: [path.resolve("./node_modules"), path.resolve("./src/js")]
  }
};

module.exports = config;
