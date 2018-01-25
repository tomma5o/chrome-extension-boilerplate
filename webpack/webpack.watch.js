module.exports = {

    entry: {
        index: './src/script/index.js',
    },
    output: {
        filename: './index.js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                },
            },
        ],
    },
};
