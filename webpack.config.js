const path = require('path');
const HtmlWebpackPLugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test:/\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPLugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html'
        }),
    ],
}
