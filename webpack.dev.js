const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const path = require("path")
module.exports = {
    entry: {
        main: "./src/main.js",

    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].[chunkhash:5].chunk.js"
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true,
        inline: true,
        watchContentBase: true,
        host: 'localhost',
        setup: function(app) {
            app.get('/some/path', function(req, res) {
                console.log(11)
                res.json({ custom: 'response' });
            });
        }

    },
    module: {
        rules: [{
                test: /\.js|.jsx$/,
                use: [
                    "babel-loader",
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [
                    "html-loader",
                ]
            },
            {
                test: /\.png|.jpg$/,
                loader: "url-loader",

            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // ( 公共chunk(commnons chunk) 的名称)
            filename: "commons.js",
            // ( 公共chunk 的文件名)
        }),
        new HtmlWebpackPlugin({
            // filename: 'test.html',
            template: "./index.html"
        })
    ]
}