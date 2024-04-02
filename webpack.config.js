// webpack.config.js
const path = require("path");

module.exports = {
    entry: "./frontend/static/js/index.js",
    output: {
        path: path.resolve(__dirname, "./frontend/static/js"),
        filename: "bundle.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
        ]
    }
};
