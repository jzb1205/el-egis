const webpack = require('webpack')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader');

const rootPath = path.resolve(__dirname,'../')

const config = {
    entry:path.resolve(rootPath,'packages','index.js'),
    devtool:'inline-source-map',
    output:{
        filename:'el-egis.js',
        path:path.resolve(rootPath,'min'),
        library:'egis',
        libraryTarget:'umd'
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            {test: /\.css$/,
                exclude: /node_modules/, // 排除node\_modules文件夹
                use: [{
                    loader:"style-loader"
                }, {
                    loader:"css-loader"
                }]}
        ]
    }
}

module.exports = config