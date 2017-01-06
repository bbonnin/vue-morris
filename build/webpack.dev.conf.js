var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

baseWebpackConfig.entry.examples = './examples/main.js'

module.exports = merge(baseWebpackConfig, {

  devServer: {
    historyApiFallback: true,
    noInfo: true
  },

  devtool: '#eval-source-map',

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'jquery': 'jquery/src/jquery.js'/*,
      'raphael': 'raphael/raphael.js'*/
    }
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'/*,
      Raphael: 'raphael'*/
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new HtmlWebpackPlugin({
      filename: './examples/index.html',
      inject: false
    })
  ]
})
