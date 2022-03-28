const path = require( "path" );

module.exports = {

    // bundling mode
    mode: "development",
    devtool: "source-map",
    // entry files
    entry: "./src/index.ts",
    watch: true,
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    },
    target: "web",

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "feature-viewer-webpack.bundle.js",
    },

    // file resolutions
    resolve: {
        extensions: [ ".ts", ".js" ],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    }
};
