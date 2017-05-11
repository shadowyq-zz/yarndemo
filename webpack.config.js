var webpack = require('webpack')

module.exports = {
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	devServer:{
		contentBase: "./public",
		historyApiFallback: true,
		inline: true,
		// hot: true,
		port: 8888

	},
	module:{
 	       loaders:[
       		 {test: /\.css$/, loader: 'style-loader!css-loader'},
		 	 {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015','react']}}
		]
        },
	plugins:[
		new webpack.BannerPlugin("This file is created by shadow")		
	]
}
