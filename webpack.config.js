const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

// const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: {
    "react-vendors": ["react", "react-dom", "react-router-dom"],
    main: {
      import: "./src/index.tsx",
      runtime: "runtime",
    },
  },
  output: {
    chunkLoadTimeout: 3000,
    filename: "[name].bundle.[contenthash].js",
    charset: true,
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[contenthash][ext]",
    clean: true,
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_module/,
        use: ["swc-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".ts", ".tsx", ".png"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    // new Dotenv({
    //   path: ".env",
    // }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
