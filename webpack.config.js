var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
    entry: "./src/js/index.js",
    

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "js/main.js",
    },

    mode: "development",

    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 1235,
        devMiddleware: {
            writeToDisk: true, 
        },
        hot: false,
        liveReload: true, 
        open: true, 
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg?g|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name:'[name].[ext]',
                            outputPath: "img",
                        }
                    }
                ]
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/, 
                use:[
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "fonts",
                            esModule: false
                        }
                    }
                ]
            },
             {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },
           
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new HtmlWebpackPlugin({
            filename: "projects.html",
            template: "./src/projects.html",
        }),
        new HtmlWebpackPlugin({
            filename: "project-details.html",
            template: "./src/project-details.html",
        }),
        new HtmlWebpackPlugin({
            filename: "blog.html",
            template: "./src/blog.html",
        }),
        new HtmlWebpackPlugin({
            filename: "blog-details.html",
            template: "./src/blog-details.html",
        }),
        
        new MiniCssExtractPlugin({ filename: "css/style.css" }),
        new OptimizeCSSAssetsPlugin({}),
    ],

};