
// 导入组件，组件必须声明 name
import egisTable from './src/egis-table.vue'
 
// 为组件提供 install 安装方法，供按需引入
egisTable.install = function (Vue) {
  Vue.component(egisTable.name, egisTable)
}
 
// 默认导出组件
export default egisTable