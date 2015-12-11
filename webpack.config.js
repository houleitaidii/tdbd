var webpack = require('webpack');
// var path = require('path');

var plugins = [
    new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
    new webpack.HotModuleReplacementPlugin(),
]

module.exports = {
    // context: __dirname + '/js',
    entry: "./app/components/entry.js",

    output: {
        filename: 'bundle.js',
        path: __dirname + '/build',
        publicPath: '/'
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
              test: /\.js?$/,
              exclude: /node_modules/,
              loader:'babel-loader',
              query:{
                presets: ['es2015', 'react']
              }
            },
            { 
                test: /\.less$/, 
                loader: 'style!css!less'
            }
        ]
    },

    plugins: plugins
};
