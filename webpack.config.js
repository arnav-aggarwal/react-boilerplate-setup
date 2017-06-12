const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');

const config = {
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
    plugins: [],
};

const PROD_ENV = process.argv.includes('-p');

if (PROD_ENV) {
    config.plugins.push(new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|html)$/,
        threshold: 10240,
        minRatio: 0.8
    }));
} else {
    config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
