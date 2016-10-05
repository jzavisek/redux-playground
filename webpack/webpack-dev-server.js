const Express = require('express')
const webpack = require('webpack')
const path = require('path')

// TODO: load from config
const config = { host: 'localhost', port: '3000' }
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
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: { colors: true }
}

const app = new Express()

app.use('/assets', Express.static(path.join(__dirname, '../app/assets')))
app.use(require('webpack-dev-middleware')(compiler, serverOptions))
app.use(require('webpack-hot-middleware')(compiler))

app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err)
  } else {
    console.info(`==> 🚧  Webpack development server listening at ${host}:${port}`)
  }
})
