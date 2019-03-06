module.exports = {
  mode: "development",
  devtool: "sourcemap",
  entry: ["./src/app.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + '/build'
  }
};