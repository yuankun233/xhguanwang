module.exports = {
	publicPath: './',
	assetsDir: 'static',
	productionSourceMap: false,
	//  devServer: {
	//      proxy: {
	//          '/api':{
	//              target:'http://www.xiaohulaile.com/xh/p/gw/',
	//              changeOrigin:true,
	//              pathRewrite:{
	//                  '^/api':'/'
	//              }
	//          }
	//      }
	//  }
	pwa: {
		iconPaths: {
			favicon32: 'favicon.ico',
			favicon16: 'favicon.ico',
			appleTouchIcon: 'favicon.ico',
			maskIcon: 'favicon.ico',
			msTileImage: './favicon.ico'
		}
	}
}
