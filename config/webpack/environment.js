const { environment } = require('@rails/webpacker')

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

environment.plugins.prepend("CleanWebpackPlugin", new CleanWebpackPlugin());


const webpack = require("webpack")

environment.plugins.append("Provide", new webpack.ProvidePlugin({

$: 'jquery',

jQuery: 'jquery',

Popper: ['popper.js', 'default']

}))


module.exports = environment
