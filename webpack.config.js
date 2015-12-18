const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const config = {
	entry: {
		app: ['./src/App.js'],
		html: ['./src/index.html']
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.json$/,
				loaders: ['json']
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css')
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass')
			},
			{
				test: /\.(jpg)|(png)|(woff)|(eot)|(ttf)|(svg)$/,
				loader: 'file'
			},
			{
				test: /\.(html)$/,
				loader: 'file?name=[name].[ext]'
			}
		],
		preLoaders: [
			// TODO: enable eslint
			//{
			//	test: /\.js$/,
			//	loader: "eslint-loader",
			//	exclude: /node_modules/
			//}
		]
	},
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	eslint: {
		// failOnError: true // Causes WebPack to fail during build if there are eslint errors
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, './build'),
		publicPath: ''
	},
	debug: true,
	devtool: 'source-map',
	plugins: [
		new ExtractTextPlugin('[name].css')
	],
	resolve: {
		extensions: ['', '.js', '.scss'],
		modulesDirectories: ['src', 'node_modules']
	}
};

module.exports = config;
