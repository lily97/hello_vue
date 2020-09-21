import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
import store from './store'
import VideoPlayer from 'vue-video-player'
import ElementUI from 'element-ui'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

// mock 开关（第二种方式）
const mock=true;
if(mock){
  require('./mock/api');
}

// 根据前端的跨域方式做调整 /a/b; /api/a/b => /a/b
axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;
// axios.defaults.baseURL=env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data; 
  } else if (res.status == 10) {
    window.location.href = '/#/login';
    return Promise.reject(res);
  } else {
    // Message.warning(res.msg);
    return Promise.reject(res);
  }
},(error)=>{
    // let res = error.response;
    // Message.error(res.data.message);
    return Promise.reject(error);
  });

Vue.use(VueAxios,axios);
Vue.use(VideoPlayer);
Vue.use(ElementUI);

Vue.use(VueLazyLoad,{
  loading:'/images/loading-svg/loading-bars.svg'
});
// Vue.prototype.$axios =axios;
// Vue.prototype.$VueAxios =VueAxios;
Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
