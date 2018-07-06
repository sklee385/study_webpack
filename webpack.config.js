const path = require('path');
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');
module.exports = {
    mode: 'development',        // production, development
    externals: [nodeExternals()],
    entry: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname),
                exclude: /(node_modules)|(dist)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    name: '[hash].[ext]',
                    limit: 10000,
                },
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }

};