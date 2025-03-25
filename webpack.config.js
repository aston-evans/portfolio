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
    watch: true, 
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
            template: "./src/home.html", // Path to your HTML
            filename: "home.html", // Output filename in dist/
            
        }),
        new HtmlWebpackPlugin({
            template: "./src/about.html",
            filename: "about.html", 
        }),
        new HtmlWebpackPlugin({
            template: "./src/contact.html", 
            filename: "contact.html", 
        }),
        new HtmlWebpackPlugin({
            template: "./src/project.html", 
            filename: "project.html", 
            
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
        port: 8080, // Port for the server
    },
    mode: "development", // Use "production" for production mode
};
