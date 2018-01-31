const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: path.join(__dirname, '../src'),
  entry: {
    app: './index.js',
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: "/",
    filename: 'app.js',
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "es2015",
              "react",
            ],
            plugins: [
              "transform-class-properties",
              "react-hot-loader/babel"
            ]
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
      'process.env.LOG': JSON.stringify(process.env.LOG),
    })
  ],
};

module.exports = config;
