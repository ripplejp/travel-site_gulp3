const path = require('path');
module.exports={
  mode: 'development',
   entry: {
     App:'./app/assets/scripts/App.js',
     Vender:'./app/assets/scripts/Vender.js'
   },
   output: {
     path: path.resolve(__dirname, "./app/temp/scripts"),
     filename:"[name].js"
   },
   module:{
     rules: [
       {
         loader: 'babel-loader',
        query:{
          presets: ['@babel/preset-env']
         },
        test: /\.js$/,
        exclude: /node_modules/
       }
    ]
   }
}
