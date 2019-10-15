<template>
    <div class="egis-pagination">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="pageSizes"
            :page-size="sizes"
            :layout="layout"
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name:'egis-pagination',
    props: {
        total: {
            type: Number,
            default: 0
        },
        sizes: {
            type: Number,
            default: 10
        },
        page: {
            type: Number,
            default: 1
        },
        layout: {
            type: String,
            default: "total, sizes, prev, pager, next, jumper"
        },
        pageSizes: {
            type: Array,
            default: ()=>[10, 20, 30, 40]
        },
    },
    data() {
        return {
            pload: {
                sizes: 10,
                page: 1
            }
        }
    },
    created() {
    },
    methods: {
        handleSizeChange(val) {
            this.pload.rows = val
            this.$emit('getList', this.pload)
        },
        handleCurrentChange(val) {
            this.pload.page = val
            this.$emit('getList', this.pload)
        }
    }
}
</script>

<style lang='less' scoped>
.egis-pagination {
  text-align: center;
  padding: 15px;
}
</style>
