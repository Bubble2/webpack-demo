var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports={
    entry:'./main.js',
    output:{
        filename:'bundle.js'
    },
    // module:{
    //     rules:[
    //         {
    //             test:/\.js[x]?$/,
    //             exclude:/node_module/,
    //             use:{
    //                 loader:'babel-loader',
    //                 options:{
    //                     presets:['es2015']
    //                 }
    //             }
    //         }
    //     ]
    // },
    plugins:[
        new UglifyJsPlugin({
            uglifyOptions:{
                compress:{
                    warnings:false
                }
            }
        })
    ]
}