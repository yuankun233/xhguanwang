import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://www.xiaohulaile.com/xh/p/gw/'

Vue.config.productionTip = false

Vue.use(ElementUI);

//解决因为点击重复跳转的路劲报错
//你可以把这段代码注释，来看效果
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return routerPush.call(this, location).catch(error => error)
}

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
