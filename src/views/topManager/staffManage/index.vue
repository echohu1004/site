<template>
    <div class="staff-manage">
        <div>
            <el-form ref="form" :model="form" label-width="150px">
                <el-form-item label="姓名：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="职位：">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="入职时间：">
                    <el-input v-model="form.IDcard"></el-input>
                </el-form-item>
                <el-form-item label="所属项目：">
                    <el-input v-model="form.native"></el-input>
                </el-form-item>
                <el-form-item label="在职状态：">
                    <el-input v-model="form.native"></el-input>
                </el-form-item>
                <el-form-item label="所属班组：">
                    <el-input v-model="form.native"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary">搜索</el-button>
        </div>
        <div>
            <el-button type="primary">添加班组</el-button>
            <el-button type="primary">批量进组</el-button>
            <el-button type="primary">批量进项目</el-button>
            <el-button type="primary">添加员工</el-button>
            <span>共搜索到 922 条数据</span>
        </div>
        <div class="table-title">
            <i class="el-icon-info"></i>
            <span>已选择 4 项</span>
            <span>总计：100,000,000人</span>
            <span>设备：20,000,000个</span>
            <span>项目：20个</span>
            <div>清空</div>
        </div>
        <div>
            <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                label="员工ID"
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
                label="职业"
                sortable
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                prop="address"
                label="手机号"
                sortable
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                prop="address"
                label="归属项目"
                sortable
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                prop="address"
                label="归属班组"
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                prop="address"
                label="在职状态"
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                prop="address"
                label="入职时间"
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                        <div>
                            <el-button class="btn-action" @click="handleModify(scope.row)" type="text">查看</el-button>
                            <el-button class="btn-action" @click="handleDelete(scope.row)" type="text">编辑</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
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
        handleSelectionChange() {
            
        }
    }
}
</script>

<style lang="scss">
    .staff-manage {

    }
</style>
