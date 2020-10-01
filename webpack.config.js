const VueLoader = require ('vue-loader/lib/plugin')
const path = require('path');
module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
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
                        options:{
                            name:'[name].[ext]',
                            publicPath:'assets/img/',
                            outputPath:'assets/img/'
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
            
        ]
    },
    plugins:[
        new VueLoader({

        })
    ]
}