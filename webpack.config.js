module.exports = {
  entry: './app/index.js',
  output: {
    filename: './build/bundle.js'
  },
  module: {
    rules: [{
      enforce: "pre", //to check source files, not modified by other loaders (like babel-loader)
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    }]
  },
  devServer: {
    port: 3001,
    contentBase: './build',
    inline: true
  }
};
