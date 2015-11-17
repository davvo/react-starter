module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: './public/',
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};