const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test'})
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development'})
}

module.exports = (env) => {
  const isProduction = env === 'production'

  return {
    entry: ['babel-polyfill','./src/app.js'],
    output: {
      path: path.join(__dirname, 'public','dist'),
      filename: 'bundle.js'
    },
    plugins :[
      new MiniCssExtractPlugin({
        filename: 'extractedCSS.css'
    }),
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY' : JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN' : JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FAIREBASE_DATABASE_URL' : JSON.stringify(process.env.FAIREBASE_DATABASE_URL),
      'process.env.FFAIREBASE_PROJECT_ID' : JSON.stringify(process.env.FAIREBASE_PROJECT_ID),
      'process.env.FAIREBASE_STORAGE_BUCKET' : JSON.stringify(process.env.FAIREBASE_STORAGE_BUCKET),
      'process.env.FAIREBASE_MESSAGING_SENDER_ID' : JSON.stringify(process.env.FAIREBASE_MESSAGING_SENDER_ID),
      'process.env.FAIREBASE_APP_ID' : JSON.stringify(process.env.FAIREBASE_APP_ID)
    })
  ],
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it uses publicPath in webpackOptions.output
            publicPath: '../',
            hmr: process.env.NODE_ENV === 'development',
          },
        },
        {
          loader : 'css-loader',
          options : {
            sourceMap : true
          }
        },
        {
          loader : 'sass-loader',
          options : {
            sourceMap : true
          }
        }]
      }]
    },
    devtool: isProduction ? 'source-map': 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
}
