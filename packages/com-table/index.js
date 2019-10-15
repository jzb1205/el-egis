
// # /packages/color-picker/index.js
// 导入组件，组件必须声明 name
import comTable from './src/com-table.vue'
 
// 为组件提供 install 安装方法，供按需引入
comTable.install = function (Vue) {
  Vue.component(comTable.name, comTable)
}
 
// 默认导出组件
export default comTable