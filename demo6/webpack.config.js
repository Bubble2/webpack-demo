var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./main.js',
    output:{
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js[x]?$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015','react']
                    }
                }
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:{
                        loader:'css-loader',
                        options:{
                            modules:true
                        }
                    }
                })
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'index',
            template:'indexTp.html'
        }),
        new ExtractTextPlugin('styles.css')
    ]
}