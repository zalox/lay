const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpack_config = require('../webpack.config');

const compiler = Webpack(webpack_config);

const server = new WebpackDevServer(compiler, {
    contentBase: webpack_config.output.path,
    publicPath: webpack_config.output.publicPath,
    disableHostCheck: true,
    stats: {
        colors: true
    },
    headers: {},
    hot: true,
});

const listen_interface = "0.0.0.0";
const listen_port = 2000;

server.listen(listen_port, listen_interface, () => {
    console.log("Starting server on " + listen_interface + ":" + listen_port);
});
