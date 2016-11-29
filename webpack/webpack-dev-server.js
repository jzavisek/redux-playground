const Express = require('express')
const webpack = require('webpack')
const path = require('path')
const config = require('./webpack-dev-server.config')
const webpackConfig = require('./dev.config')

const compiler = webpack(webpackConfig)

const host = config.host || 'localhost'
const port = config.port || 3000
const serverOptions = {
  contentBase: 'http://' + host + ':' + port,
  quiet: false,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
  serverSideRender: true,
}

const app = new Express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'templates'))
app.use('/assets', Express.static(path.join(__dirname, '../app/assets')))
app.use(require('webpack-dev-middleware')(compiler, serverOptions))
app.use(require('webpack-hot-middleware')(compiler))

// Serve template with generated bundle from webpack
const allowedRoutes = ['/', '/index', '/test']
app.get(allowedRoutes, (req, res) => {
  const assets = res.locals.webpackStats.toJson().assetsByChunkName
  res.render('index', { assets })
})

app.listen(port, err => {
  if (err) {
    console.error(err)
    return
  }
  
  console.info(`==> 🚧  Webpack development server listening at ${host}:${port}`)
})
