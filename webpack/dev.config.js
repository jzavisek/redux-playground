const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const host = 'localhost'
const port = 3000
const autoprefixer = require('autoprefixer')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const PATHS = {
  root: path.join(__dirname, '../'),
  assets: path.join(__dirname, '../dist')
}

module.exports = {
  devtool: 'eval',
  entry: [
    `webpack-hot-middleware/client?path=http://${host}:${port}/__webpack_hmr`,
    'webpack/hot/only-dev-server',
    './app/assets/less/site.less',
    './app/entry.js'
  ],
  output: {
    path: PATHS.assets,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',

    // Path used by HtmlWebpackPlugin when creating index.html
    // and also by iconfont.css generator
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: "file-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)\/|iconfont.font.js$/,
        loaders: ['babel-loader'],
        happy: { id: 'jsx' }
      },
      {
        test: /\.less$/,
        include: /app/,
        loader: 'style-loader!css-loader!postcss!less-loader',
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        include: /app/,
        loader: 'url-loader?limit=10240?name=img/[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        exclude: /node_modules/,
        include: /app/,
        loader: 'url-loader?limit=8192&name=fonts/[name].[ext]'
      }
    ]
  },
  postcss: function() {
    return [autoprefixer({ browsers: ['last 2 versions'] })]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less',  '.ts', '.tsx', '.html']
  },
  plugins: [

    // Cleans dist folder before build
    new CleanWebpackPlugin(['dist'], {
       root: PATHS.root,
    }),

    // Creates HTML page and injects generated bundle.js to the page
    new HtmlWebpackPlugin({
      title: 'React - starter',
      filename: 'index.html',
      inject: 'body',
      showErrors: true,
      template: 'app/index.ejs'
    }),

    // Injects newly generated changes to the page without refresh
    new webpack.HotModuleReplacementPlugin(),

    // Defines global variables available within scripts
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      },

      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    }),

    // Exports modules to globals (accessible from modules only)
    new webpack.ProvidePlugin({
      //$: "jquery",
      //jQuery: "jquery"
    }),

    // Speeds up build
    new HappyPack({
      id: 'jsx',
      threads: 5
    })
  ]
}
