const config = {
    entry:{
        bundle1:'./main.js'
    },
    output:{
        path:__dirname+'/dist',
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js|jsx$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"[name].[ext]"
                        }
                    },
                    {
                        loader:"extract-loader"
                    },
                    "css-loader"
                ]
            }
        ]
    }
}

module.exports = config;