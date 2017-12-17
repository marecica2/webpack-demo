const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: {
    app: [
      './src/index.js',
    ]
  },

  resolve: {
    modules: [
      path.join(__dirname, "js/helpers"),
      "node_modules"
    ]    
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },


  module: {
    rules: [
      {
        test: require.resolve("./src/vendor/bootstrap.bundle.js"),
        use: "imports-loader?$=jquery"
      },
      
    ],

    loaders: [
      {
        test: /\.es6\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        exclude: /node_modules/
      },
    ]
  },


};