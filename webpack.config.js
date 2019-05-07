/* eslint-disable */

const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const node_modules = path.resolve(__dirname, 'node_modules')
const pathToReact = path.resolve(node_modules, 'react/dist/react.min.js')

const pathsName = {
  DIST: 'dist',
  ASSETS: 'assets',
  NODE_MODULES: 'node_modules',
  SRC: 'src'
}
const paths = {
  DIST: path.resolve(__dirname, pathsName.DIST),
  ASSETS: path.resolve(__dirname, pathsName.ASSETS),
  NODE_MODULES: path.resolve(__dirname, pathsName.NODE_MODULES),
  SRC: path.resolve(__dirname, pathsName.SRC)
}

module.exports = {

  context: __dirname,

  entry: path.resolve(paths.SRC, './index.jsx'),

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  devtool: 'eval-source-map',

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [pathsName.DIST]
    })
  ],

  output: {
    path: paths.DIST,
    filename: 'bundle.js'
  },

  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    port: 8080
  },

  optimization: {
    minimizer: []
  },

  resolve: {
    modules: [
      'node_modules',
      './src',
      './assets'
    ],
    extensions: [
      '.js',
      '.json',
      '.jsx'
    ]
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /node_modules\/jquery\/.+\.(jsx|js)$/,
        loader: 'imports?jQuery=jquery,$=jquery,this=>window'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }, {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=application/vnd.ms-fontobject'
      }, {
        test: /\.woff/,
        loader: 'url-loader?mimetype=application/font-woff'
      }, {
        test: /\.woff2/,
        loader: 'url-loader?mimetype=application/font-woff2'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?mimetype=application/x-font-ttf'
      }
    ],
    noParse: [pathToReact]
  }
}
