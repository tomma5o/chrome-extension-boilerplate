module.exports = {

    entry: {
        extension: './src/script/extension/index.js',
        spa: './src/script/spa/index.js'
    },
    output: {
        filename: './[name]/index.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
