const path = require("path");

module.exports = {
  entry: "./src/main.js",
  devtool: "source-map",
  target: "node",
  module: {
    rules: [
      {
        test: /rx\.lite\.aggregates\.js/,
        use: "imports-loader?define=>true"
      },
      {
        test: /JSONStream\/index\.js$/,
        use: ["remove-hashbag-loader"]
      }
    ]
  },
  resolveLoader: {
    alias: {
      "remove-hashbag-loader": path.join(
        __dirname,
        "./loaders/remove-hashbag-loader"
      )
    }
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
