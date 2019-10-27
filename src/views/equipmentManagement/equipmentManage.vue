<template>
    <div class="equipment-manage">
        <div class="business-header">
            <div class="left">
                <div class="bus-header--input">
                    设备标识：
                    <el-input
                        class="search-input"
                        v-model="businessValue"
                        placeholder="请输入"
                        clearable>
                    </el-input>
                </div>
                <div class="bus-header--input">
                    功能状态：
                    <el-select v-model="businessStatus" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="bus-header--input">
                    更新时间：
                    <el-date-picker
                        v-model="businessTime"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </div>
                <div class="bus-header--input">
                    归属状态：
                    <el-select v-model="businessStatus" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <el-button type="primary">按钮</el-button>
        </div>
        <div>
            
        </div>
        <div class="business-add">
            <el-button type="primary" icon="el-icon-plus">添加企业</el-button>
            <div class="all-data">共搜索到 922 条数据</div>
        </div>
        <div class="business-table">   
            <div class="table-title">
                <img class="el-icon-info" src="../../assets/businessManage/！@2x.png" alt="">
                <span>已选择<i>4</i>项</span>
                <span>总计：100,000,000人</span>
                <span>设备：20,000,000个</span>
                <span>项目：20个</span>
                <div class="clear">清空</div>
            </div>
             <el-table
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
                label="设备ID"
                width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="设备名称"
                width="120">
                </el-table-column>
                <el-table-column
                prop="address"
                label="关键唯一标识"
                show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                prop="address"
                label="归属公司"
                show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                prop="address"
                label="归属状态"
                show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                prop="address"
                label="功能状态"
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                prop="address"
                label="企业加入时间"
                show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                        <div>
                            <el-button class="btn-action" @click="handleView(scope.row)" type="text">查看</el-button>
                            <el-button class="btn-action" @click="handleModify(scope.row)" type="text">编辑</el-button>
                            <el-button class="btn-action" @click="handleSwitch(scope.row)" type="text">开启</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
                <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
                <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
        </div>
        <!-- <el-pagination
            class="el-pagebox"
            background
            layout="prev, pager, next"
            :total="pagebox.totalrows"
            :current-page.sync="pagebox.currentpage"
            @current-change="handleChangepage"
            >
        </el-pagination> -->
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
            businessValue: '',
            businessStatus: '',
            businessTime: '',
            options: [{
                value: 'TOP_NAVIGATION_BAR',
                label: '顶部导航栏'
                }, {
                value: 'BOTTOM_NAVIGATION_BAR',
                label: '底部导航栏'
            }],
            addtime: '',
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
            multipleSelection: [],
            pagebox: {
                totalrows: 10,
                currentpage: 1,
                pageSize: 10
            },
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        handleView() {
            this.$router.push({path: './equipmentManage'})
        },
        handleModify(row) {
            this.$router.push({path: `./equipmentDetail/${row.id}`})
        },
        handleSwitch() {

        },
        toggleSelection(rows) {
            if (rows) {
            rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
            } else {
            this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    }
}
</script>

<style lang="scss">
    @import "@/common/scss/common.scss";
    .equipment-manage {
        padding: 20px;
        background-color: #ffffff;
        .business-header {
            display: flex;
            .left {
                display: flex;
                flex-wrap: wrap;
                .bus-header--input {
                    margin-right: 10px;
                    .el-input {
                        width: 224px;
                    }
                }
                .bus-header--input:nth-child(4) {
                    margin-top: 16px;
                }
            }
        }
        .business-add {
            display: flex;
            padding: 20px 0;
        }
        .business-table {
            .table-title {
                display: flex;
                align-items: center;
                height: 40px;
                padding: 0 16px;
                background:rgba(230,247,255,1);
                border-radius:4px;
                border:1px solid rgba(186,231,255,1);
            }
        }
        .el-pagebox {
            text-align: right;
        }
    }
</style>