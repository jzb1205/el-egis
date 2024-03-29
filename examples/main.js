import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 注册
Vue.use(ElementUI)
// 导入组件库
// import elEgis from './../packages/index'
import elEgis from './../min/el-egis'
// 注册组件库
Vue.use(elEgis)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
