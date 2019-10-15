
// 导入组件，组件必须声明 name
import egisDialog from './src/egis-dialog.vue'
 
// 为组件提供 install 安装方法，供按需引入
egisDialog.install = function (Vue) {
  Vue.component(egisDialog.name, egisDialog)
}
 
// 默认导出组件
export default egisDialog