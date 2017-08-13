const path = require('path');

module.exports = {

  entry: [
    './event/src/index.js'
  ],

  output: {
    filename: 'event.js',
    path: path.join(__dirname, '../', 'build')
  },

  resolve: {
    alias: {
      Lib: path.resolve(__dirname, 'src/lib'),
      Reducers: path.resolve(__dirname, 'src/reducers'),
      Sagas: path.resolve(__dirname, 'src/sagas'),
      Services: path.resolve(__dirname, 'src/services'),
      Actions: path.resolve(__dirname, 'src/actions'),
      Store: path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.json', '.ts'],
    modules: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      }, {
        test: /\.(ts)?$/,
        loader: 'ts-loader',
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
      }
    ]
  },
  devtool: 'source-map'
};
