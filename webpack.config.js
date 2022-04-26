const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        "index": "./src/index.js",
        "home": "./src/home.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[contenthash].bundle.js",
        clean: true
    },
    devtool: "source-map",
    devServer:{
        static:{
            directory: path.join(__dirname, 'dist'),
        },
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            template: "./src/home.html",
            inject: true,
            chunks: ['home'],
            filename: 'home.html'
        }),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [
            {
                from: "./src/assets/**",
                to() {
                    return "assets/img/[name][ext]";
                },
            }
        ],
        }),
    ],
    module: {
        rules:[{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader",
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: {
                            plugins: [
                                ["autoprefixer"]
                            ]
                        }
                    }
                }
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            type: 'asset/resource'
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}
