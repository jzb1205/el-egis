
// 导入组件，组件必须声明 name
import egisPagination from './src/egis-pagination.vue'
 
// 为组件提供 install 安装方法，供按需引入
egisPagination.install = function (Vue) {
  Vue.component(egisPagination.name, egisPagination)
}
 
// 默认导出组件
export default egisPagination