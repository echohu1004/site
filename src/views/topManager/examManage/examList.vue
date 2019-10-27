<template>
    <div class="project-index">
        <div class="project-header">
            <div class="bus-header--input">
                试卷名称：
                <el-input
                    class="search-input"
                    v-model="businessValue"
                    placeholder="请输入"
                    clearable>
                </el-input>
            </div>
            <div class="bus-header--input">
                试卷编号：
                <el-input
                    class="search-input"
                    v-model="businessValue"
                    placeholder="请输入"
                    clearable>
                </el-input>
            </div>
            <el-button type="primary">搜 索</el-button>
        </div>
        <div class="business-add">
            <el-button type="primary" icon="el-icon-plus">新增试卷</el-button>
            <el-button type="primary" icon="el-icon-plus">新增学习材料</el-button>
        </div>
        <div class="business-table">   
            <!-- <div class="table-title">
                <i class="el-icon-info"></i>
                <span>已选择 4 项</span>
                <span>总计：100,000,000人</span>
                <span>设备：20,000,000个</span>
                <span>项目：20个</span>
                <div>清空</div>
            </div> -->
             <el-table
                ref="multipleTable"
                :data="tableData"
                :header-cell-style="{background:'#FAFAFA',color:'#000000'}"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <!-- <el-table-column
                type="selection"
                width="55">
                </el-table-column> -->
                <el-table-column
                label="序号"
                width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="id"
                label="试卷编号"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="试卷名称"
                width="320">
                </el-table-column>
                <el-table-column
                prop="remark"
                label="使用场景或试题备注"
                width="350">
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
                date: '1',
                id: '2899',
                name: 'xx 工地进场考试',
                remark:'安全类'
                }, {
                date: '2',
                id: '2900',
                name: 'xx 工地进场考试',
                remark:'安全类'
                }, {
                date: '3',
                id: '2901',
                name: 'xx 工地进场考试',
                remark:'安全类'
                }, {
                date: '4',
                id: '3901',
                name: 'xx 工地进场考试',
                remark:'安全类'
                }, {
                date: '5',
                id: '4901',
                name: 'xx 工地进场考试',
                remark:'安全类'
                }, {
                date: '6',
                id: '5901',
                name: 'xx 工地进场考试',
                remark:'安全类'
                }, {
                date: '7',
                id: '6901',
                name: 'xx 工地进场考试',
                remark:'安全类'
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

    }
}
</script>

<style lang="scss">
    .project-index {
        padding: 24px 30px;
        .project-header {
            display: flex;
            .bus-header--input {
                margin-right: 24px;
                .el-input {
                    width: 224px;
                    .el-input__inner {
                        height: 32px;

                    }
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
    }
</style>
