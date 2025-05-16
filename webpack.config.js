const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/import.js", // Entry point for your JavaScript
    output: {
        filename: "bundle.js", // Output bundled file
        path: path.resolve(__dirname, "dist"), // Output directory
        publicPath: "/", // Make sure to serve files from root
    },
    watch: process.env.NODE_ENV !== "production", //true  watch: true, good for development bad for docker, 
    module: {
        rules: [
            {
                test: /\.css$/, // CSS rule
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // Path to your HTML
            filename: "index.html", // Output filename in dist/
            
        }),
        
        new HtmlWebpackPlugin({
            template: "./src/suny.html",
            filename: "suny.html"

        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: 'img', to: 'img'}
            ]
        })
        
    ],
    devServer: {
        static: path.join(__dirname, "dist"), // Serve content from dist/
        compress: true,
        port: 8080, 
        allowedHosts: 'all',
    },
    mode: "development",
};
