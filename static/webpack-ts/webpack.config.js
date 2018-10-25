var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        'app': path.resolve(__dirname, './src/app.ts')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: 'chunk/[id]_[chunkhash:8].chunk.js'
    },
    devServer: {
        port: 8888,
        open: true,
        hot: true,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=64',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff|svg|eot|ttf)$/,
                loader: 'url-loader?limit=64',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings 
                }, {
                    loader: "css-loader" // translates CSS into CommonJS 
                }, {
                    loader: "less-loader" // compiles Less to CSS 
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings 
                }, {
                    loader: "css-loader" // translates CSS into CommonJS 
                }, {
                    loader: "sass-loader" // compiles Less to CSS 
                }]
            }
        ]
    },
    resolve: {
        "extensions": ['.js', '.ts','.scss','.less','.css']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
}