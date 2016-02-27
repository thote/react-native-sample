var webpack = require("webpack");
module.exports = {
  entry: "./js/MoviesApp.js",
  output: {
    path: "./dist",
    filename: "./bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.js$/,  exclude: /node_modules/,  loader: 'babel?presets[]=react,presets[]=es2015'}
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  devServer: {
    hot: true,
    port: 3000
  }
};