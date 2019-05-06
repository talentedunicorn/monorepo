const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.NODE_ENV === "development"

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css': '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css': '[id].[hash].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.module\.css$/, 
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              camelCase: true,
              sourceMap: isDevelopment
            }
          }
        ]
      }
    ]
  }
}
