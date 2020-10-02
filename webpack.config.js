const {VueLoader} = require('vue-loader/lib/plugin');
const FaviconWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist",
        filename: "build.js",
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: 'assets/img/',
                            outputPath: 'assets/img/'
                        }
                    }
                ],
            },
            {
                test: /\.pdf$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: 'assets/docs/',
                            outputPath: 'assets/docs/'
                        }

                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'

                ]
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader'
                
            }

        ]
    },
    resolve:{
        alias:{
            vue$:"vue/dist/vue.esm.js"
        },
        extensions: ["*",".js",".vue",".json"]
    },
    plugins: [
        new VueLoader(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
}