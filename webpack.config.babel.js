import webpack from 'webpack';
import loaders from './webpack.loaders.babel';

export default {
    entry: '',
    output: {
        path: './web/',
        publicPath: '/web/',
        filename: 'js/[name].js'
    },
    module: {
        loaders
    }
}

