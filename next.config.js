const isProduction = 'production' === process.env.NODE_ENV

module.exports = {
  output: 'export',
  assetPrefix: isProduction ? '/mes-aides-changent' : ''
}
