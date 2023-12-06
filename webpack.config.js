const path = require("path");

module.exports = {
  entry: "./src",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },  
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js",
  },
};
