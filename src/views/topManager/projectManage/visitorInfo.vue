<template>
    <div class="visitor-information">
        <div>
            <h1>基本信息</h1>
            <el-button type="primary">编辑</el-button>
        </div>
        <div>
            <el-form ref="form" :model="form" label-width="150px">
                <el-form-item label="访客姓名：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="审核状态：">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="登记时间：">
                    <el-input v-model="form.IDcard"></el-input>
                </el-form-item>
                <el-form-item label="到访时间：">
                    <el-input v-model="form.native"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <h1>访客详细名单</h1>
            <div>
                <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                    label="组内序号"
                    width="120">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="照片1"
                    sortable
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="照片2"
                    sortable
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="照片3"
                    sortable
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="状态"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        align="center">
                        <template slot-scope="scope">
                            <div>
                                <el-button class="btn-action" @click="handleModify(scope.row)" type="text">修改</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {

    },
    data() {
        return {
            form: {
                name: '',
                phone: '',
                IDcard: '',
                native: '',
                roletype: '',
                rolename: '',
                owned: ''
            },
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss">

</style>
