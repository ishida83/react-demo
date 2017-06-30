const path = require('path');
const webpack = require('webpack');

const assetsPath = path.join(__dirname, "public", "assets");
const serverPath = path.join(__dirname, "server");
const distPath = path.join(__dirname, 'dist');

module.exports = [
	{
		devtool: 'source-map',
		name: "browser",
		entry: './app/entry.jsx',
		output: {
			path: distPath,
			filename: 'entry.generator.js'
		},
		plugins: [
			new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
			})
		],
		module: {
			loaders: [
				{ test: /\.(js|jsx)/, loader: "jsx-loader" }
			]
		}

	},
	{
		devtool: 'source-map',
		name: "server-side rending",
		entry: './server/page.jsx',
		output: {
			path: distPath,
			filename: "page.generator.js",
			library: 'page',
			libraryTarget: 'commonjs'
		},
		plugins: [
			new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
			})
		],
		module: {
			loaders: [
				{ test: /\.(js|jsx)$/, loader: 'jsx-loader' }
			]
		}
	}
];