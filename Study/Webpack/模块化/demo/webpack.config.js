const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer:{
    port:8080,
    publicPath:'./dist'
  },
  //文件加载器：loader
  module:{
    rules:[
      {
        test: /\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    new UglifyJSPlugin()
  ]
}
