module.exports = {
  devServer:{
    // host:'localhost',
    // port:8080,
    proxy:{
      '/api':{
        target: 'http://localhost:8888',// 请求的目标服务器接口
        changeOrigin:true,
        pathRewrite:{ 
          '^/api': '/api'
        }
      }
    }
  },
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  // productionSourceMap:true,
  // chainWebpack:(config)=>{
  //   config.plugins.delete('prefetch');
  // }
}