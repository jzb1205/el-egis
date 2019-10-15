
// # /packages/color-picker/index.js
// 导入组件，组件必须声明 name
import comDialog from './src/com-dialog.vue'
 
// 为组件提供 install 安装方法，供按需引入
comDialog.install = function (Vue) {
  Vue.component(comDialog.name, comDialog)
}
 
// 默认导出组件
export default comDialog