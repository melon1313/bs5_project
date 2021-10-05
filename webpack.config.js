const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // 入口
    entry: './src/index.js',

    // 模式
    mode: 'production', //production, development

    // 出口
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[hash].js'
    },

    //loader
    module: {
        rules: [
          {
            test: /\.css$|\.scss$/i,
            use: 
            [
                MiniCssExtractPlugin.loader, 
                {
                  // Translates CSS into CommonJS
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                  }
                },
                {
                  loader: 'postcss-loader'
                },
                {
                  loader: "sass-loader"
                }
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ],
    },

    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'index.[hash].css'
        }),
        new CleanWebpackPlugin()
    ],

    devtool: 'source-map',
    performance : {
      hints : false
  }
};