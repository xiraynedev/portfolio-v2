const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { NetlifyPlugin } = require('netlify-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    main: path.resolve(__dirname, 'src', 'index.tsx'),
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/i,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.tsx?$/i,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/i,
        loader: 'ts-loader',
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /.(svg|ico|png|webp|jpg|gif|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'template.html'),
      title: 'React Portfolio',
      favicon: path.resolve(__dirname, 'favicon.png'),
    }),
    new NetlifyPlugin({
      headers: {
        '/images/*': {
          'Cache-Control': 'immutable',
        },
      },
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
