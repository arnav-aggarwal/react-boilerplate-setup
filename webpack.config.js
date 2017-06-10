const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.svg$/,
                loader: 'raw-loader',
            },
        ],
    },
    devtool: 'cheap-eval-source-map',
    watchOptions: {
        ignored: /node_modules/,
    },
    plugins: [new BundleAnalyzerPlugin()],
};
