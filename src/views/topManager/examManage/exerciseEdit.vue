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
                <!-- <el-select v-model="businessStatus" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select> -->
            </div>
            <div class="bus-header--input">
                通过分数：
                <el-input
                    class="search-input"
                    v-model="businessValue"
                    placeholder="请输入"
                    clearable>
                </el-input>
                <!-- <el-select v-model="businessStatus" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select> -->
            </div>
            <div>100分制</div>
        </div>
        <div class="business-add">
            <el-button type="primary" >关联试题</el-button>
        </div>
        <div class="business-table">   
             <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <!-- <el-table-column
                type="selection"
                width="55">
                </el-table-column> -->
                <el-table-column
                label="序号"
                width="58">
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="id"
                label="题目编号"
                width="129">
                </el-table-column>
                <el-table-column
                prop="name"
                label="题目名称"
                width="120">
                <!-- sortable
                show-overflow-tooltip> -->
                </el-table-column>
                <el-table-column
                prop="type"
                label="试题类型"
                width="120">
                <!-- sortable
                show-overflow-tooltip> -->
                </el-table-column>
                <el-table-column
                prop="remark"
                label="备注（题干或材料简述）"
                width="180">
                <!-- sortable
                show-overflow-tooltip> -->
                </el-table-column>
                <el-table-column
                prop="percent"
                label="分值占比"
                width="180">
                <!-- sortable
                show-overflow-tooltip> -->
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                        <div>
                            <el-button class="btn-action" @click="handleModify(scope.row)" type="text">查看</el-button>
                            <el-button class="btn-action" @click="handleDelete(scope.row)" type="text">删除关联</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="project-header">
            <el-button type="primary"> 保 存</el-button>
            <el-button type="primary_cancel">取  消</el-button>
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
                date: '01',
                id: '2899',
                name: '外墙安全手册',
                type: '单选题 ',
                remark:'安全类',
                percent:'10%'
                }, {
                date: '02',
                id: '2900',
                name: '建筑风力学',
                type: '单选题 ',
                remark: '安全类',
                percent:'10%'
                }, {
                date: '03',
                id: '2901',
                name: '砌墙守则安全',
                type: '单选题 ',
                remark: '安全类',
                percent:'10%'
                }, {
                date: '04',
                id: '2902',
                name: '花岗岩选材指南',
                type: '单选题 ',
                remark: '安全类',
                percent:'10%'
                }, {
                date: '05',
                id: '2903',
                name: '水泥倒水评估',
                type: '单选题 ',
                remark: '安全类',
                percent:'10%'
                }, {
                date: '06',
                id: '2904',
                name: '人工心肺复苏',
                type: '单选题 ',
                remark: '医护类',
                percent:'10%'
                }, {
                date: '07',
                id: '2905',
                name: '封顶风险手册',
                type: '单选题 ',
                remark: '安全类',
                percent:'10%'
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
        handleSelectionChange() {

        }
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
