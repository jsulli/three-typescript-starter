/* Configure HTMLWebpack plugin */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/html/index.html',
    filename: 'index.html',
    inject: 'body'
})

/* Export configuration */
module.exports = {

    mode: 'development',
    devtool: 'source-map',
    entry: [
        './src/ts/index.ts'
    ],

    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: { extensions: [".web.ts", ".web.js", ".ts", ".js"] },
    plugins: [HTMLWebpackPluginConfig]
}
