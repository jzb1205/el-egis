<template>
    <egis-pagination 
        :sizes="pagination.sizes"
        :page="pagination.page"
        :total="pagination.total"
        @getList="getListByPage"
        :pageSizes="pagination.pageSizes"
        :layout="pagination.layout"
      ></egis-pagination>
</template>

<script>
export default {
    data(){
        return{
            //分页参数
            pagination: {
                sizes: 10,
                page: 1,
                total: 0,
                layout:"total, sizes, prev, pager, next, jumper",
                pageSizes:[10, 20, 30, 400]
            },
        }
    },
    created() {
    },
    methods:{
        getListByPage(){}
    }
}
</script>

<style>

</style>