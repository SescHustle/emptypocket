const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

const plugins = [
  new HtmlWebpackPlugin({
    template: "./public/index.html",
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
];

module.exports = {
  mode,
  plugins,
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "index.[hash].js",
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === "production" ? "asset" : "asset/resource",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devServer: {
    host: "localhost",
    port: 3000,
    open: true,
    static: {
      directory: path.join(__dirname, "/public"),
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  devtool: "source-map",
};
