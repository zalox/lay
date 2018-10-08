const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'cheap-module-inline-source-map',
    entry: {
        'index': [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://10.0.0.117:2000',
            'webpack/hot/only-dev-server',
            './src',
        ]
    },
    output: {
    path: path.resolve(__dirname,'web'),
    publicPath: '/public/',
    filename: 'js/[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    module: {
        rules: [
            { test: /\.jsx?$/, use: [ 'babel-loader', ], exclude: /node_modules/ },
            { test: /\.css$/,  use: [ 'style-loader', 'css-loader?modules', ], },
        ],
    },
    resolve: {
        extensions: [".js","jsx",".json"],
        mainFiles: ["index"]
    }
}

