const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), 
    filename: "bundle.js", 
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
        test: /\.scss$/, 
        use: ["style-loader", "css-loader", "sass-loader"],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", 
    }),
  ],
  devServer: {
    port: 3030, 
  },
};