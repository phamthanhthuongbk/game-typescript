module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
      path: __dirname,
      filename: 'build/bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.ts$/,
              loader: 'ts-loader'
          }
      ]
  },
  resolve: {
      extensions: ['.ts', '.js']
  }
}