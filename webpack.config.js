var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");

module.exports = {
	// the directory for resolving the entry option
	context: __dirname+"/assets", 
	devtool: debug ? "inline-sourcemap" : false,
	entry: "./js/index.js",
	module: {
		loaders:[
            {
            	test: /\.jsx?/,
            	exclude: /(node_modules|bower_components)/,
            	loader: "babel-loader",
            	query:{
            		presets: ["react", "es2015"]
            	}
            }
		]
	},
	output:{
		path: __dirname+"/assets",
		filename: "client.min.js"
	},
	plugins: debug ? [
        new webpack.ProvidePlugin({ 
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery' 
        }),
	        ] : [
	    new webpack.ProvidePlugin({ 
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery' 
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }), 
	],
};