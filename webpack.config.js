const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  devtool: "cheap-module-eval-source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      "@": resolve("src/components")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    open: true,
    // contentBase: "./dist",
    hot: true,
    quiet: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    }),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
