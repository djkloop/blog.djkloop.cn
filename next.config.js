const nib = require('nib');
const rupture = require('rupture');
const withStylus = require('@zeit/next-stylus');
const poststylus = require('poststylus');
const autoprefixer = require('autoprefixer');
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript(withStylus({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  stylusLoaderOptions: {
    use: [
      nib(),
      rupture(),
      poststylus([
        autoprefixer({
          flexbox: 'no-2009'
        })
      ]),
    ]
  }
}));