<template>
    <div class="role-manage">
        <div class="role-header">
            <div class="role-header--input">
                角色类型：
                <el-select v-model="businessStatus" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <el-button type="primary">查询</el-button>
        </div>
        <div class="user-btn">
            <el-button type="primary">添加角色</el-button>
            <el-button type="plain">批量删除</el-button>
        </div>
        <el-table
            class="table-site"
            ref="multipleTable"
            :header-cell-style="{background:'#FAFAFA',color:'#000000'}"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            label="角色ID"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
            prop="name"
            label="角色名称"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="创建人"
            >
            </el-table-column>
            <el-table-column
            prop="address"
            label="备注信息"
            >
            </el-table-column>
            <el-table-column
            prop="address"
            label="创建时间"
            >
            </el-table-column>
            <el-table-column
                label="操作"
                align="center">
                <template slot-scope="scope">
                    <div>
                        <el-button class="btn-action" @click="handleView(scope.row)" type="text">查看</el-button>
                        <el-button class="btn-action" @click="handleAllot(scope.row)" type="text">分配</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
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
            businessStatus: '',
            options: [{
                value: 'TOP_NAVIGATION_BAR',
                label: '顶部导航栏'
                }, {
                value: 'BOTTOM_NAVIGATION_BAR',
                label: '底部导航栏'
            }],
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
        handleView() {
            this.$router.push({path: './roleLimits'})
        },
        handleModify(row) {
            this.$router.push({path: `./roleLimits/${row.id}`})
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
    }
}
</script>

<style lang="scss">
    .role-manage {
        padding: 20px;
        background-color: #ffffff;
        .role-header {
            display: flex;
            .role-header--input {
                margin-right: 24px;
                .el-input, .el-range-editor {
                    width: 224px;
                }
            }
        }
        .user-btn {
            display: flex;
            padding: 20px 0;
        }
    }
</style>
