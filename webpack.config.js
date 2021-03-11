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
          },
          {
            test: /\.(png|jpe?g|gif|jp2|webp)$/,
            loader: 'file-loader',
            options: {
              name: 'build/images/[name].[ext]',
            }
          },
      ]
  },
  resolve: {
      extensions: ['.ts', '.js']
  }
}