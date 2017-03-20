var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var config = {

	entry:{
		main:path.resolve(__dirname,'src')+"/app/index.js"
		// vendor:'chai'
	},

	output:{
		path:path.resolve(__dirname,'src','app','static','js'),
		//path:path.resolve(__dirname,'src','app'),
		// filename:'[name].[hash].js',
		filename:'bundle.js',
		publicPath:"/app/"
	},
	target: 'node',
	 externals: [{
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  	}],

	module:{
		loaders:[

					{
						test:/\.js$/,
						//exclude : /node_modules/,
						include: path.resolve(__dirname,"src"),
						loader:'babel-loader',
						query :{
							presets : ['es2015','react','stage-0']
						}
					}
					
					

		]
	},
	plugins:[
		new CopyWebpackPlugin(
			[
				{from:'src/app/static/css',to:'css'}
			]
							)
							// ,
		 // new webpack.optimize.CommonsChunkPlugin({
                // names: ['vendor', 'manifest'] // Specify the common bundle's name.
            // })
	]
}

module.exports = config;

//inside loaders//
// ,
					// {
					// 	test : /\.css$/,
					// 	loader : 'style-loader!css-loader'
					// }