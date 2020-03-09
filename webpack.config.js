const path = require('path');
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",   // #3 injects the style into DOM
          "css-loader",     // #2 loads the css code and turns it into commonjs code
          "sass-loader"     // #1 loads the scss code and turns it into css
        ]
      }
    ]
  }
}