const path = require("path")
module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "./webpack/dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  }
}